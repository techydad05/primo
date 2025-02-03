import { r as redirect } from './index-Q4WdoeBP.js';

async function load({ depends, params, parent }) {
  depends("app:data");
  const { supabase, session } = await parent();
  if (!session) {
    throw redirect(303, "/auth");
  }
  const site_url = params["site"];
  const client_params = params["page"]?.split("/") || [];
  const page_url = client_params.pop() || "index";
  const parent_url = client_params.pop() || null;
  let site, page;
  if (parent_url) {
    const res = await Promise.all([
      supabase.from("sites").select().filter("url", "eq", site_url).single(),
      supabase.from("pages").select(`*, site!inner(id, url), parent!inner(id, url)`).match({
        url: page_url,
        "site.url": site_url,
        "parent.url": parent_url
      }).single()
    ]);
    site = res[0]["data"];
    page = res[1]["data"];
  } else {
    const res = await Promise.all([
      supabase.from("sites").select().filter("url", "eq", site_url).single(),
      supabase.from("pages").select(`*, site!inner(id, url)`).match({
        url: page_url,
        "site.url": site_url
      }).is("parent", null).single()
    ]);
    site = res[0]["data"];
    page = res[1]["data"];
  }
  if (!site) {
    throw redirect(303, "/");
  } else if (!page && page_url !== "index") {
    throw redirect(303, `/${site_url}/index`);
  }
  const [{ data: pages }, { data: symbols }, { data: sections }] = await Promise.all([
    supabase.from("pages").select().match({ site: site.id }).order("created_at", { ascending: true }),
    supabase.from("symbols").select().match({ site: site.id }).order("index", { ascending: true }),
    supabase.from("sections").select("id, page, index, content, symbol").match({ page: page["id"] }).order("index", { ascending: true })
  ]);
  return {
    site,
    page,
    pages,
    sections,
    symbols
  };
}

var _layout = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 2;
let component_cache;
const component = async () => component_cache ??= (await import('./_layout.svelte-Cl4GOftz.js')).default;
const universal_id = "src/routes/[site]/+layout.js";
const imports = ["_app/immutable/nodes/2.eb6842b4.js","_app/immutable/chunks/index.ade5cbd2.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/chunks/index.7ce6af5d.js","_app/immutable/chunks/Page.svelte_svelte_type_style_lang.5ee686e0.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/index.ffa02d79.js","_app/immutable/chunks/navigation.2516ba35.js","_app/immutable/chunks/singletons.d2d14c82.js","_app/immutable/chunks/stores.fb720b2c.js","_app/immutable/chunks/converter.1113586f.js","_app/immutable/chunks/index.0e6ed1ec.js"];
const stylesheets = ["_app/immutable/assets/Page.c37a3656.css","_app/immutable/assets/CodeMirror.f33dab8f.css"];
const fonts = ["_app/immutable/assets/fira-code-cyrillic-ext-400-normal.aeaf7f0a.woff2","_app/immutable/assets/fira-code-cyrillic-ext-400-normal.96b1b870.woff","_app/immutable/assets/fira-code-cyrillic-400-normal.dac6dde5.woff2","_app/immutable/assets/fira-code-cyrillic-400-normal.b0cb6f39.woff","_app/immutable/assets/fira-code-greek-ext-400-normal.9abd2774.woff2","_app/immutable/assets/fira-code-greek-ext-400-normal.8c540835.woff","_app/immutable/assets/fira-code-greek-400-normal.ab9177a1.woff2","_app/immutable/assets/fira-code-greek-400-normal.f70ef159.woff","_app/immutable/assets/fira-code-latin-ext-400-normal.5e162e63.woff2","_app/immutable/assets/fira-code-latin-ext-400-normal.315dc11c.woff","_app/immutable/assets/fira-code-latin-400-normal.2b407eb4.woff2","_app/immutable/assets/fira-code-latin-400-normal.59bca7e3.woff"];

export { component, fonts, imports, index, stylesheets, _layout as universal, universal_id };
//# sourceMappingURL=2-By6zIF5R.js.map
