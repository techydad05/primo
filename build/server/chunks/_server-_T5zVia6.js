import { j as json } from './index-Q4WdoeBP.js';
import { s as supabase_admin } from './admin-Cwn7f44Z.js';
import '@supabase/supabase-js';
import './public-C_Z4GS8g.js';

async function page_search(url, site_url) {
  const options = {
    range: "0,9",
    // from,to # https://supabase.com/docs/reference/javascript/range
    search: ""
  };
  for (const p of url.searchParams) {
    if (options.hasOwnProperty(p[0])) {
      options[p[0]] = p[1];
    }
  }
  if (!options.search) {
    return json({
      error: "The search query cannot be empty"
    });
  } else {
    const [{ data: pages_data, error }, { count: pages_total }] = await Promise.all([
      supabase_admin.rpc("page_search", {
        search_terms: options.search.replaceAll(" ", " & "),
        site_url
      }).select("id, name, url, created_at").range(parseInt(options.range.split(",")[0]), parseInt(options.range.split(",")[1])),
      supabase_admin.rpc(
        "page_search",
        {
          search_terms: options.search.replaceAll(" ", " & "),
          site_url
        },
        { count: "exact", head: true }
      )
    ]);
    if (error) {
      return json({
        error: `The page_search RPC hasn't been added`
      });
    }
    const pages = pages_data?.map((page) => ({
      _meta: {
        id: page.id,
        name: page.name,
        url: "/" + page.url,
        created_at: page.created_at
      }
    }));
    return json({
      pages,
      pages_total
    });
  }
}
async function GET({ url, params }) {
  if (url.searchParams.has("search")) {
    return await page_search(url, params.site);
  }
  const [{ data: site_res }, { data: page_res }, { data: subpages_data }, { data: sections_res }] = await Promise.all([
    supabase_admin.from("sites").select().filter("url", "eq", params.site).single(),
    supabase_admin.from("pages").select("*, site!inner(url)").match({ url: "index", "site.url": params.site }).single(),
    supabase_admin.from("pages").select("*, site!inner(url)").match({ "site.url": params.site }),
    supabase_admin.from("sections").select("*, page!inner( site!inner(url) )").match({
      "page.site.url": params.site,
      "page.url": "index"
    })
  ]);
  const site = {
    ...site_res["content"]["en"],
    _meta: {
      id: site_res.id,
      name: site_res.name,
      url: site_res.url,
      created_at: site_res.created_at
    }
  };
  const page = {
    ...page_res["content"]["en"],
    _meta: {
      id: page_res.id,
      name: page_res.name,
      url: page_res.url,
      created_at: page_res.created_at,
      // filtering here because the query above is not filtering properly (maybe a Supabase bug)
      subpages: subpages_data?.filter((subpage) => subpage.parent === null && subpage.url !== "index").map((subpage) => ({
        id: subpage.id,
        name: subpage.name,
        url: subpage.url,
        created_at: subpage.created_at
      }))
    }
  };
  const sections = sections_res?.sort((a, b) => a.index - b.index).map((section) => ({
    ...section.content.en,
    _meta: {
      id: section.id,
      symbol: section.symbol,
      created_at: section.created_at
    }
  }));
  return json({
    site,
    page,
    sections
  });
}

export { GET };
//# sourceMappingURL=_server-_T5zVia6.js.map
