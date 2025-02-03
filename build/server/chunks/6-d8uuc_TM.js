import { r as redirect } from './index-Q4WdoeBP.js';
import { s as supabase_admin } from './admin-Cwn7f44Z.js';
import '@supabase/supabase-js';
import './public-C_Z4GS8g.js';

async function load({ url, parent }) {
  const { session } = await parent();
  const signing_up = url.searchParams.has("signup");
  const joining_server = url.pathname.includes("set-password");
  if (!session && !signing_up && !joining_server) {
    const { data: existing_users } = await supabase_admin.from("users").select("*");
    const initiated = existing_users?.length > 0;
    if (!initiated) {
      throw redirect(303, "?signup");
    }
  } else if (session && !joining_server) {
    throw redirect(303, "/");
  }
}
const actions = {
  sign_in: async ({ request, locals: { supabase } }) => {
    const data = await request.formData();
    const email = data.get("email");
    const password = data.get("password");
    const { data: res, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      console.error(error);
      return {
        success: false,
        error: error.message
      };
    }
    return {
      success: true,
      error: null
    };
  },
  sign_up: async ({ request, locals: { supabase } }) => {
    const { success, error } = await server_provisioned();
    if (!success) {
      return {
        success: false,
        error
      };
    }
    const count = await supabase_admin.from("users").select("count").then(({ data: data2 }) => data2?.[0]["count"]);
    if (count > 0) {
      return {
        success: false,
        error: "Server already initialized. Sign in as the server owner to invite users."
      };
    }
    const data = await request.formData();
    const email = data.get("email");
    const password = data.get("password");
    const { data: res, error: auth_error } = await supabase_admin.auth.admin.createUser({
      // @ts-ignore
      email,
      // @ts-ignore
      password,
      email_confirm: true
    });
    if (auth_error) {
      return {
        success: false,
        error: auth_error.message
      };
    } else if (res) {
      const { error: signin_error } = await supabase.auth.signInWithPassword({ email, password });
      if (!signin_error) {
        await supabase_admin.from("users").insert({
          id: res.user?.id,
          email: res.user?.email
        });
        await supabase_admin.from("server_members").insert({
          user: res.user?.id,
          role: "DEV",
          admin: true
        });
      }
      return {
        success: !signin_error,
        error: signin_error?.message
      };
    }
  }
};
async function server_provisioned() {
  const { status, error } = await supabase_admin.from("sites").select();
  if (status === 0) {
    return {
      success: false,
      error: `Could not connect your Supabase backend. Ensure you've correctly connected your environment variables.`
    };
  } else if (status === 404) {
    console.error(error);
    return {
      success: false,
      error: `Your Supabase backend is connected but incorrectly provisioned. Ensure you've run the setup schema outlined in the Docs.`
    };
  } else if (status === 200) {
    return { success: true, error: null };
  } else {
    return { success: false, error: `Unknown error` };
  }
}

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 6;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-C0zw4VSH.js')).default;
const server_id = "src/routes/auth/+page.server.js";
const imports = ["_app/immutable/nodes/6.6a7c3e39.js","_app/immutable/chunks/index.7ce6af5d.js","_app/immutable/chunks/stores.fb720b2c.js","_app/immutable/chunks/singletons.d2d14c82.js","_app/immutable/chunks/index.ffa02d79.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/navigation.2516ba35.js","_app/immutable/chunks/ServerLogo.34fd066a.js"];
const stylesheets = ["_app/immutable/assets/6.7665ad40.css","_app/immutable/assets/ServerLogo.db5c2054.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=6-d8uuc_TM.js.map
