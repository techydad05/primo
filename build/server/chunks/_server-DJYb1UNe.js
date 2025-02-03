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
  const { data: token, error: error$1 } = await supabase_admin.from("config").select("value").eq("id", `${provider}_token`).single();
  if (error$1) {
    return json(null);
  }
  let data = null;
  if (provider === "github" && token) {
    const res = await axios.get(`https://api.github.com/user`, {
      headers: {
        Authorization: `Bearer ${token.value}`,
        Accept: "application/vnd.github.v3+json"
      }
    });
    data = res.data;
  } else if (provider === "gitlab" && token) {
    const res = await axios.get(`https://gitlab.com/api/v4/user`, {
      headers: { Authorization: `Bearer ${token?.value}` }
    });
    data = res.data;
  }
  return json(data);
}

export { GET };
//# sourceMappingURL=_server-DJYb1UNe.js.map
