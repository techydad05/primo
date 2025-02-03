import { s as supabase_admin } from './admin-Cwn7f44Z.js';
import { r as redirect } from './index-Q4WdoeBP.js';
import '@supabase/supabase-js';
import './public-C_Z4GS8g.js';

const actions = {
  default: async ({ request, locals: { supabase } }) => {
    const form_data = await request.formData();
    const email = form_data.get("email");
    const password = form_data.get("password");
    const { data } = await supabase_admin.from("users").select("id").eq("email", email).single();
    const { error } = await supabase_admin.auth.admin.updateUserById(data.id, {
      password
    });
    await supabase_admin.from("invitations").delete().match({ email });
    if (!error) {
      await supabase.auth.signInWithPassword({ email, password });
      throw redirect(303, "/");
    }
    return { success: !error, error };
  }
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions
});

const index = 7;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-DaaHMeHi.js')).default;
const server_id = "src/routes/auth/set-password/+page.server.js";
const imports = ["_app/immutable/nodes/7.09aa3913.js","_app/immutable/chunks/index.7ce6af5d.js","_app/immutable/chunks/stores.fb720b2c.js","_app/immutable/chunks/singletons.d2d14c82.js","_app/immutable/chunks/index.ffa02d79.js","_app/immutable/chunks/ServerLogo.34fd066a.js"];
const stylesheets = ["_app/immutable/assets/7.be25e69a.css","_app/immutable/assets/ServerLogo.db5c2054.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=7-Cjf3VBK1.js.map
