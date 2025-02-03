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
  const { site } = await request.json();
  const repo_url = site.active_deployment.repo.url;
  const user_id = session.user.id;
  const [{ data: collaborator }, { data: server_member }] = await Promise.all([
    supabase_admin.from("collaborators").select("*").match({ site: site.id, user: user_id }).single(),
    supabase_admin.from("server_members").select("*").eq("user", user_id).single()
  ]);
  if (collaborator || server_member) {
    const { data: token } = await supabase_admin.from("config").select("value").single();
    if (!token) {
      return json({ success: false, error: "No token found" });
    }
    await axios.delete(repo_url, {
      headers: {
        Authorization: `token ${token.value}`,
        Accept: "application/vnd.github.v3+json"
      }
    }).catch(function(error2) {
      console.warn(`Github API error: ${error2.message}`);
      return null;
    });
    return json({ success: true, error: null });
  } else {
    return json({ success: false, error: "Unauthorized" });
  }
}

export { POST };
//# sourceMappingURL=_server-zTRQhU2e.js.map
