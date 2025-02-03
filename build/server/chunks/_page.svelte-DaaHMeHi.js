import { c as create_ssr_component, a as subscribe, v as validate_component, d as escape, b as add_attribute } from './index3-UOcDFV3P.js';
import { p as page } from './stores-B5bpgGi-.js';
import { S as ServerLogo } from './ServerLogo-DtX2-eFY.js';

const css = {
  code: "main.svelte-m2f9pr.svelte-m2f9pr{display:flex;flex-direction:column;justify-content:center;min-height:100vh;background:var(--color-gray-9);color:white}.logo.svelte-m2f9pr.svelte-m2f9pr{display:flex;justify-content:center;width:100%;margin-bottom:2rem}.logo.svelte-m2f9pr .logo-container.svelte-m2f9pr{width:10rem}.error.svelte-m2f9pr.svelte-m2f9pr{color:#f72228;margin-bottom:1rem}header.svelte-m2f9pr.svelte-m2f9pr{padding-bottom:10px}header.svelte-m2f9pr h1.svelte-m2f9pr{text-align:left;font-weight:500;font-size:24px;line-height:24px;padding-bottom:0.5rem}header.svelte-m2f9pr h2.svelte-m2f9pr{padding-bottom:1rem;color:var(--color-gray-3)}.box.svelte-m2f9pr.svelte-m2f9pr{width:100%;max-width:450px;padding:2.5rem;border-radius:6px;background-color:#1a1a1a;margin:0 auto}.form.svelte-m2f9pr.svelte-m2f9pr{display:grid;gap:2rem;width:100%}.form.svelte-m2f9pr .fields.svelte-m2f9pr{display:grid;gap:1rem}.form.svelte-m2f9pr label.svelte-m2f9pr{color:#b6b6b6;display:grid;gap:0.5rem;font-size:0.875rem;font-weight:400}.form.svelte-m2f9pr input.svelte-m2f9pr{color:#dadada;border-radius:0.25rem;border:1px solid #6e6e6e;padding:0.75rem;background-color:#1c1c1c;font-size:1rem}.form.svelte-m2f9pr .button.svelte-m2f9pr{color:#cecece;font-weight:500;display:flex;flex-direction:row;justify-content:center;align-items:center;padding:0.65rem;border:1.5px solid #35d994;border-radius:0.25rem}.form.svelte-m2f9pr .button.svelte-m2f9pr:disabled{opacity:0.5;cursor:not-allowed}.form.svelte-m2f9pr .button.svelte-m2f9pr:hover{background-color:#35d994;transition:0.2s;color:#121212}.form.svelte-m2f9pr .button.svelte-m2f9pr:focus{background-color:#208259}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let disabled;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { form } = $$props;
  let email = $page.url.searchParams.get("email") || "";
  let password = "";
  let password_again = "";
  const error = form?.error;
  if ($$props.form === undefined && $$bindings.form && form !== undefined)
    $$bindings.form(form);
  $$result.css.add(css);
  disabled = true;
  $$unsubscribe_page();
  return `<main class="primo-reset svelte-m2f9pr"><div class="logo svelte-m2f9pr"><div class="logo-container svelte-m2f9pr">${validate_component(ServerLogo, "ServerLogo").$$render($$result, {}, {}, {})}</div></div>
  <div class="box svelte-m2f9pr"><header class="svelte-m2f9pr"><h1 class="svelte-m2f9pr">Create account</h1>
      <h2 class="svelte-m2f9pr">Enter the password you&#39;ll use for this account to finish signing up.
      </h2></header>
    ${error ? `<div class="error svelte-m2f9pr">${escape(error)}</div>` : ``}
    <form class="form svelte-m2f9pr" method="POST"><div class="fields svelte-m2f9pr"><label class="svelte-m2f9pr"><span>Email</span>
          <input type="email" disabled class="svelte-m2f9pr"${add_attribute("value", email, 0)}>
          <input${add_attribute("value", email, 0)} type="hidden" name="email" class="svelte-m2f9pr"></label>
        <label class="svelte-m2f9pr"><span>Password</span>
          <input type="password" class="svelte-m2f9pr"${add_attribute("value", password, 0)}></label>
        <label class="svelte-m2f9pr"><span>Confirm Password</span>
          <input type="password" name="password" class="svelte-m2f9pr"${add_attribute("value", password_again, 0)}></label></div>
      <button class="button svelte-m2f9pr" type="submit" ${disabled ? "disabled" : ""}${add_attribute("title", disabled ? "Passwords do not match" : "", 0)}><span>Create Account</span></button></form></div>
</main>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-DaaHMeHi.js.map
