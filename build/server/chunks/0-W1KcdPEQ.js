import { P as PUBLIC_SUPABASE_PUBLIC_KEY, a as PUBLIC_SUPABASE_URL } from './public-C_Z4GS8g.js';
import { createSupabaseLoadClient } from '@supabase/auth-helpers-sveltekit';
import { r as redirect } from './index-Q4WdoeBP.js';

async function load$1(event) {
  event.depends("supabase:auth");
  event.depends("app:data");
  const supabase = createSupabaseLoadClient({
    supabaseUrl: PUBLIC_SUPABASE_URL,
    supabaseKey: PUBLIC_SUPABASE_PUBLIC_KEY,
    event: { fetch },
    serverSession: event?.data?.session
  });
  const {
    data: { session }
  } = await supabase.auth.getSession();
  if (!session && !event.url.pathname.startsWith("/auth")) {
    throw redirect(303, "/auth");
  } else if (session) {
    const { sites, user } = await Promise.all([
      supabase.from("sites").select("id, name, url, active_deployment, collaborators (*)").order("created_at", { ascending: true }),
      supabase.from("users").select("*, server_members (admin, role), collaborators (role)").eq("id", session.user.id).single()
    ]).then(([{ data: sites2 }, { data: user2 }]) => {
      const [server_member] = user2.server_members;
      const [collaborator] = user2.collaborators;
      const user_final = server_member ? {
        ...user2,
        server_member: true,
        admin: server_member.admin,
        role: server_member.role
      } : {
        ...user2,
        server_member: false,
        admin: false,
        role: collaborator.role
      };
      return {
        sites: sites2 || [],
        user: user_final
      };
    });
    const user_sites = sites?.filter(
      (site) => (
        /*user is server member*/
        user.server_member || /*user is site collaborator*/
        site.collaborators.some(
          (collaborator) => collaborator.user === user.id
        )
      )
    );
    return {
      supabase,
      session,
      user,
      sites: user_sites
    };
  }
}

var _layout = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load$1
});

const load = async ({ url, locals: { supabase, getSession } }) => {
  const { data: symbol } = await supabase.from("symbols").select("index").limit(1);
  if (url.pathname !== "/update-notice" && url.pathname !== "/auth") {
    if (!symbol) {
      throw redirect(303, "/update-notice?alert=missing-symbol-index");
    }
  } else if (url.pathname === "/update-notice") {
    if (symbol && url.searchParams.get("alert") === "missing-symbol-index") {
      throw redirect(303, "/");
    }
  }
  return {
    session: await getSession()
  };
};

var _layout_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 0;
let component_cache;
const component = async () => component_cache ??= (await import('./_layout.svelte-DsEOzWcW.js')).default;
const universal_id = "src/routes/+layout.js";
const server_id = "src/routes/+layout.server.js";
const imports = ["_app/immutable/nodes/0.42d910ab.js","_app/immutable/chunks/Modal.c2829365.js","_app/immutable/chunks/index.7ce6af5d.js","_app/immutable/chunks/singletons.d2d14c82.js","_app/immutable/chunks/index.ffa02d79.js","_app/immutable/chunks/stores.fb720b2c.js","_app/immutable/chunks/navigation.2516ba35.js","_app/immutable/chunks/utils.78dc49a2.js","_app/immutable/chunks/Page.svelte_svelte_type_style_lang.5ee686e0.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/converter.1113586f.js","_app/immutable/chunks/index.ade5cbd2.js","_app/immutable/chunks/control.f5b05b5f.js"];
const stylesheets = ["_app/immutable/assets/0.13fe9c06.css","_app/immutable/assets/Modal.bc3e6364.css","_app/immutable/assets/Page.c37a3656.css","_app/immutable/assets/CodeMirror.f33dab8f.css"];
const fonts = ["_app/immutable/assets/fira-code-cyrillic-ext-400-normal.aeaf7f0a.woff2","_app/immutable/assets/fira-code-cyrillic-ext-400-normal.96b1b870.woff","_app/immutable/assets/fira-code-cyrillic-400-normal.dac6dde5.woff2","_app/immutable/assets/fira-code-cyrillic-400-normal.b0cb6f39.woff","_app/immutable/assets/fira-code-greek-ext-400-normal.9abd2774.woff2","_app/immutable/assets/fira-code-greek-ext-400-normal.8c540835.woff","_app/immutable/assets/fira-code-greek-400-normal.ab9177a1.woff2","_app/immutable/assets/fira-code-greek-400-normal.f70ef159.woff","_app/immutable/assets/fira-code-latin-ext-400-normal.5e162e63.woff2","_app/immutable/assets/fira-code-latin-ext-400-normal.315dc11c.woff","_app/immutable/assets/fira-code-latin-400-normal.2b407eb4.woff2","_app/immutable/assets/fira-code-latin-400-normal.59bca7e3.woff"];

export { component, fonts, imports, index, _layout_server as server, server_id, stylesheets, _layout as universal, universal_id };
//# sourceMappingURL=0-W1KcdPEQ.js.map
