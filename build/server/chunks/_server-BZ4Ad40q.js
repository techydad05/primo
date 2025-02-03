import { r as redirect } from './index-Q4WdoeBP.js';
import { s as supabase_admin } from './admin-Cwn7f44Z.js';
import { p as postcss, h as html_server } from './server-postcss-D3aZNC9c.js';
import { g as getPageData, a as get_content_with_static } from './FileSaver.min-DRdcPaqH.js';
import './Icon-Dg-p2Y8u.js';
import 'axios';
import '@supabase/supabase-js';
import './public-C_Z4GS8g.js';
import 'vm';
import 'memfs';
import 'lodash-es';
import 'node:path';
import 'path';
import 'node:process';
import 'node:perf_hooks';
import 'node:crypto';
import 'node:fs/promises';
import 'tty';
import 'resolve.exports';
import 'estree-walker';
import './_commonjsHelpers-BFTU3MAI.js';
import 'url';
import 'nanoid/non-secure';
import 'fs';
import './node-C2KYhD1y.js';
import 'util';
import './index3-UOcDFV3P.js';
import './index2-B3uZdIkT.js';
import 'timeago.js';
import 'crypto';

const GET = async (event) => {
  const { url } = event;
  if (url.pathname.includes(".html")) {
    const site_url = event.params["site"];
    const [parent_url = "index", child_url] = event.params["page"]?.split("/") ?? [];
    const page_url = child_url ?? parent_url;
    const [{ data: site }, { data: page }] = await Promise.all([
      supabase_admin.from("sites").select("*").filter("url", "eq", site_url).single(),
      supabase_admin.from("pages").select("*, site!inner(url)").match({ "site.url": site_url, url: page_url }).single()
    ]);
    console.log({ site, page, page_url });
    if (!site)
      ;
    else if (!page && page_url !== "index") {
      throw redirect(303, `/${site_url}/index`);
    }
    const [{ data: symbols }, { data: sections }] = await Promise.all([
      supabase_admin.from("symbols").select().match({ site: site.id }).order("created_at", { ascending: false }),
      supabase_admin.from("sections").select("id, page, index, content, symbol").match({ page: page["id"] }).order("index", { ascending: true })
    ]);
    const locale = "en";
    const component = await Promise.all([
      (async () => {
        const css = await postcss(site.code.css + page.code.css);
        const data = getPageData({ page, site, loc: locale });
        return {
          html: `
			      <svelte:head>
			        ${site.code.html.head}
			        ${page.code.html.head}
			        <style>${css}</style>
			      </svelte:head>`,
          css: ``,
          js: ``,
          data
        };
      })(),
      ...sections.map(async (section) => {
        const symbol = symbols.find((symbol2) => symbol2.id === section.symbol);
        const { html, css: rawcss, js } = symbol.code;
        const data = get_content_with_static({
          component: section,
          symbol,
          loc: locale
        });
        const css = await postcss(rawcss || "");
        const section_id = section.id.split("-")[0];
        return {
          html: `
		        <div class="section" id="section-${section_id}">
		          ${html}
		        </div>`,
          js,
          css: css || "",
          data
        };
      }).filter(Boolean),
      // remove options blocks
      (async () => {
        const data = getPageData({ page, site, loc: locale });
        return {
          html: site.code.html.below + page.code.html.below,
          css: ``,
          js: ``,
          data
        };
      })()
    ]);
    const res = await html_server({
      component
    });
    const final = `  <!DOCTYPE html>
  <html lang="${locale}">
    <head>
      <meta name="generator" content="Primo" />
      ${res.head}
      <style>${res.css}</style>
    </head>
    <body id="page">
      ${res.html}
    </body>
  </html>
  `;
    return new Response(final, {
      status: 200,
      headers: {
        "Content-Type": "text/html"
      }
    });
  }
};

export { GET };
//# sourceMappingURL=_server-BZ4Ad40q.js.map
