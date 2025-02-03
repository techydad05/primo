import { e as error, j as json } from './index-Q4WdoeBP.js';
import { s as supabase_admin } from './admin-Cwn7f44Z.js';
import axios from 'axios';
import '@supabase/supabase-js';
import './public-C_Z4GS8g.js';

async function POST({ request, locals }) {
  const session = await locals.getSession();
  if (!session) {
    throw error(401, { message: "Unauthorized" });
  }
  const { files, site_id, repo_name, create_new, message, provider } = await request.json();
  const user_id = session.user.id;
  const [{ data: collaborator }, { data: server_member }] = await Promise.all([
    supabase_admin.from("collaborators").select("*").match({ site: site_id, user: user_id }).single(),
    supabase_admin.from("server_members").select("*").eq("user", user_id).single()
  ]);
  if (collaborator || server_member) {
    const { data: token } = await supabase_admin.from("config").select("value").eq("id", `${provider}_token`).single();
    if (!token) {
      return json({ deployment: null, error: "No token found" });
    }
    if (create_new) {
      const new_deployment = await git_providers[provider].create_repo({
        repo_name,
        token: token.value
      });
      return json({ deployment: new_deployment, error: null });
    } else {
      const new_deployment = await git_providers[provider].push_site({
        files,
        token: token.value,
        repo_name,
        message
      });
      await supabase_admin.from("sites").update({ active_deployment: new_deployment }).eq("id", site_id);
      return json({ deployment: new_deployment, error: null });
    }
  } else {
    return json({ deployment: null, error: "Unauthorized" });
  }
}
const github = {
  /**
   * @param {CreateRepoParams} params
   * @returns {Promise<void>}
   */
  create_repo: async function({ repo_name, token }) {
    const repo_sans_user = repo_name.split("/")[1];
    const { data } = await axios.post(
      `https://api.github.com/user/repos`,
      {
        name: repo_sans_user,
        auto_init: true
      },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return data;
  },
  /**
   * @param {PushSiteParams} params
   * @returns {Promise<import('@primocms/builder/src/lib/deploy.js').DeploymentResponse>}
   */
  push_site: async function({ repo_name, files, message, token }) {
    const headers = {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github.v3+json"
    };
    const [
      { data: existing_repo },
      {
        data: [latest_commit]
      }
    ] = await Promise.all([
      axios.get(`https://api.github.com/repos/${repo_name}`, { headers }),
      axios.get(`https://api.github.com/repos/${repo_name}/commits?sha=main`, {
        headers
      })
    ]);
    const active_sha = latest_commit?.sha;
    const tree = await create_tree();
    const commit = await create_commit(tree.sha, active_sha);
    const final = await push_commit(commit.sha);
    return {
      deploy_id: final.object.sha,
      repo: existing_repo,
      created: Date.now(),
      tree
    };
    async function create_tree() {
      const tree2 = files.map((file) => ({
        path: file.path,
        sha: file.sha,
        type: "blob",
        mode: "100644"
      }));
      const { data } = await axios.post(
        `https://api.github.com/repos/${repo_name}/git/trees`,
        { tree: tree2 },
        { headers }
      );
      return data;
    }
    async function create_commit(tree2, active_sha2) {
      const { data } = await axios.post(
        `https://api.github.com/repos/${repo_name}/git/commits`,
        {
          message,
          tree: tree2,
          ...active_sha2 ? { parents: [active_sha2] } : {}
        },
        { headers }
      );
      return data;
    }
    async function push_commit(commitSha) {
      const { data } = await axios.patch(
        `https://api.github.com/repos/${repo_name}/git/refs/heads/main`,
        {
          sha: commitSha
          // force: true,
        },
        { headers }
      );
      return data;
    }
  }
};
const gitlab = {
  /**
   * @param {CreateRepoParams} params
   * @returns {Promise<void>}
   */
  create_repo: async function({ repo_name, token }) {
    const repo_sans_user = repo_name.split("/")[1];
    const response = await axios.post(
      `https://gitlab.com/api/v4/projects`,
      { name: repo_sans_user, initialize_with_readme: true },
      { headers: { "PRIVATE-TOKEN": token } }
    );
    console.log("Repository created:", response.data);
  },
  /**
   * @param {PushSiteParams} params
   * @returns {Promise<import('@primocms/builder/src/lib/deploy.js').DeploymentResponse>}
   */
  push_site: async function({ repo_name, files, message, token }) {
    const project_id = encodeURIComponent(repo_name);
    const headers = { "PRIVATE-TOKEN": token };
    const existing_files = await fetch_file_list(project_id);
    const actions = files.map((file) => ({
      action: existing_files.includes(file.path) ? "update" : "create",
      file_path: file.path,
      content: file.content
    }));
    const { data } = await axios.post(
      `https://gitlab.com/api/v4/projects/${project_id}/repository/commits`,
      { branch: "main", commit_message: message, actions },
      { headers }
    );
    console.log("Commit successful:", data);
    return {
      deploy_id: data.id,
      repo: {
        ...data,
        full_name: repo_name
        // copy github response for later display
      },
      created: Date.now()
    };
    async function fetch_file_list(project_id2) {
      const fileList = await fetch_tree_files(
        `https://gitlab.com/api/v4/projects/${project_id2}/repository/tree`
      );
      return fileList;
      async function fetch_tree_files(url) {
        const response = await axios.get(url, { headers });
        const items = response.data;
        const filePromises = items.map(async (item) => {
          if (item.type === "blob") {
            return item.path;
          } else if (item.type === "tree") {
            const subUrl = `https://gitlab.com/api/v4/projects/${project_id2}/repository/tree?path=${encodeURIComponent(
              item.path
            )}`;
            const subFiles = await fetch_tree_files(subUrl);
            return subFiles;
          }
        });
        return (await Promise.all(filePromises)).flat();
      }
    }
  }
};
const git_providers = {
  github,
  gitlab
};

export { POST };
//# sourceMappingURL=_server-CkWlfD7i.js.map
