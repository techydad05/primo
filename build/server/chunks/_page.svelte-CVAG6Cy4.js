import { c as create_ssr_component, a as subscribe } from './index3-UOcDFV3P.js';
import { p as page } from './stores-B5bpgGi-.js';

const css = {
  code: "h1.svelte-1dj4z3r.svelte-1dj4z3r{line-height:1.1;margin-bottom:0.5rem}h3.svelte-1dj4z3r.svelte-1dj4z3r{--typography-spacing-vertical:1rem}.alert.svelte-1dj4z3r.svelte-1dj4z3r{font-size:1.25rem;position:fixed;inset:0;padding:2rem;display:flex;flex-direction:column;align-items:center;justify-content:center;background:#111;color:white;font-family:system-ui, sans-serif}.alert.svelte-1dj4z3r .container.svelte-1dj4z3r{max-width:900px;background:#222;padding:2rem;border-radius:0.25rem;display:flex;flex-direction:column;align-items:flex-start}pre.svelte-1dj4z3r.svelte-1dj4z3r{padding:0.25rem 0.5rem;border:1px solid #35d994;display:inline-block}a.svelte-1dj4z3r.svelte-1dj4z3r{color:#35d994}footer.svelte-1dj4z3r.svelte-1dj4z3r{font-size:1rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const alert = $page.url.searchParams.get("alert");
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@1/css/pico.min.css">

<div class="alert svelte-1dj4z3r" data-theme="dark"><div class="container svelte-1dj4z3r">${alert === "missing-symbol-index" ? `<div class="headings"><h1 class="svelte-1dj4z3r">Your database needs a quick change</h1>
        <h2>A recent update to Primo added the ability to rearrance Blocks in the
          sidebar, but it requires a small change to your database to work
          correctly. This is a one-time change and will not affect your existing
          data.
        </h2></div>

      <h3 class="svelte-1dj4z3r">Here&#39;s what you need to do:</h3>
      <ol><li><strong>Open your Supabase SQL Editor:</strong>
          <span></span>
          You&#39;ll need to run the SQL command in the next step. If you&#39;re not sure
          how to access the SQL Editor, refer to the
          <a href="https://supabase.com/docs/guides/database/overview#the-sql-editor" target="blank" class="svelte-1dj4z3r">Supabase documentation.
          </a></li>
        <li><strong>Run the following query:</strong>
          <span>Copy and paste the below SQL code into the editor and execute it. It
            should return &quot;Success. No rows returned&quot;
          </span></li>
        <pre class="svelte-1dj4z3r">alter table symbols<br>add column index integer;</pre>
        <li><strong>Refresh this page:</strong>
          <span>Once the query has been successfully executed, refresh this page to
            apply the changes. If all went well, you&#39;ll be redirected to your
            Primo dashboard.
          </span></li></ol>` : ``}
    <footer class="svelte-1dj4z3r">See the <a target="blank" href="https://primocms.org/changelog" class="svelte-1dj4z3r">release notes
      </a>
      for more info or get help in the
      <a target="blank" href="https://discord.gg/RmjYqDq" class="svelte-1dj4z3r">Primo Discord</a></footer></div>
</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-CVAG6Cy4.js.map
