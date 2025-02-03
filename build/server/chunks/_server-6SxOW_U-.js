import { e as error, j as json } from './index-Q4WdoeBP.js';
import { s as supabase_admin } from './admin-Cwn7f44Z.js';
import axios from 'axios';
import '@supabase/supabase-js';
import './public-C_Z4GS8g.js';

async function GET({ locals, url }) {
  const session = await locals.getSession();
  if (!session) {
    throw error(401, { message: "Unauthorized" });
  }
  const provider = url.searchParams.get("provider");
  const { data: token } = await supabase_admin.from("config").select("value").eq("id", `${provider}_token`).single();
  let repos = null;
  if (provider === "github" && token) {
    const headers = {
      Authorization: `Bearer ${token.value}`,
      Accept: "application/vnd.github.v3+json"
    };
    const res = await Promise.all([
      axios.get(`https://api.github.com/user/repos?per_page=100`, {
        headers: { ...headers }
      }),
      axios.get(`https://api.github.com/user/repos?per_page=100&page=2`, {
        headers: { ...headers }
      })
    ]).then((res2) => res2.map(({ data }) => data));
    repos = res.flat().map((repo) => ({
      id: repo.full_name,
      label: repo.name
    }));
  } else if (provider === "gitlab" && token) {
    const res = await axios.get("https://gitlab.com/api/v4/projects", {
      headers: { Authorization: `Bearer ${token.value}` },
      params: {
        owned: true,
        per_page: 100
      }
    });
    repos = res.data?.map((project) => ({
      id: project.path_with_namespace,
      label: project.name
    }));
  }
  return json(repos);
}

export { GET };
//# sourceMappingURL=_server-6SxOW_U-.js.map
