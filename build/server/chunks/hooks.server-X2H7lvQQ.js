import './index4-C-_nEMH7.js';
import { s as supabase_admin } from './admin-Cwn7f44Z.js';
import { createSupabaseServerClient } from '@supabase/auth-helpers-sveltekit';
import { P as PUBLIC_SUPABASE_PUBLIC_KEY, a as PUBLIC_SUPABASE_URL } from './public-C_Z4GS8g.js';
import '@supabase/supabase-js';

async function handle({ resolve, event }) {
  event.locals.supabase = createSupabaseServerClient({
    supabaseUrl: PUBLIC_SUPABASE_URL,
    supabaseKey: PUBLIC_SUPABASE_PUBLIC_KEY,
    event
  });
  event.locals.getSession = async () => {
    const {
      data: { session }
    } = await event.locals.supabase.auth.getSession();
    return session;
  };
  const response = await resolve(event, {
    filterSerializedResponseHeaders(name) {
      return name === "content-range";
    }
  });
  const is_preview = event.url.searchParams.has("preview");
  if (is_preview) {
    const [{ data: site }, { data: page }] = await Promise.all([
      supabase_admin.from("sites").select("id, url").eq("url", event.params.site).single(),
      supabase_admin.from("pages").select("id, url, site!inner(*)").match({
        url: event.params.page || "index",
        "site.url": event.params.site
      }).single()
    ]);
    if (!site || !page)
      return new Response("no page found");
    const { data: file } = await supabase_admin.storage.from("sites").download(`${site.id}/${page.id}/index.html`);
    return new Response(file || "no preview found", {
      headers: {
        "Content-Type": "text/html;charset=UTF-8",
        "Access-Control-Allow-Origin": "*"
      }
    });
  }
  if (event.request.method === "OPTIONS") {
    return new Response(null, {
      headers: {
        "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE",
        "Access-Control-Allow-Origin": "*"
      }
    });
  }
  response.headers.set("Access-Control-Allow-Origin", "*");
  return response;
}

export { handle };
//# sourceMappingURL=hooks.server-X2H7lvQQ.js.map
