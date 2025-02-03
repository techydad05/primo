import { j as json } from './index-Q4WdoeBP.js';
import { s as supabase_admin } from './admin-Cwn7f44Z.js';
import '@supabase/supabase-js';
import './public-C_Z4GS8g.js';

async function POST({ request }) {
  const {
    url,
    site = null,
    server_invitation,
    role,
    email
  } = await request.json();
  const { data, error } = await supabase_admin.auth.admin.inviteUserByEmail(
    email,
    { redirectTo: `${url}/auth/set-password?email=${email}` }
  );
  if (!error) {
    await supabase_admin.from("users").insert({
      id: data.user.id,
      email: data.user.email
    });
    const { error: error2 } = server_invitation ? await supabase_admin.from("server_members").insert({ user: data.user.id, role }) : await supabase_admin.from("collaborators").insert({ site, user: data.user.id, role });
    console.error(error2);
    return json({ success: !error2, error: error2?.message });
  } else {
    console.error(error);
    return json({ success: false, error: error.message });
  }
}

export { POST };
//# sourceMappingURL=_server-D1xZPjZ8.js.map
