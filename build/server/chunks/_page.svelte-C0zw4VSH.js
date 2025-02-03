import { c as create_ssr_component, a as subscribe, v as validate_component, d as escape, b as add_attribute } from './index3-UOcDFV3P.js';
import { p as page, n as navigating } from './stores-B5bpgGi-.js';
import { S as ServerLogo } from './ServerLogo-DtX2-eFY.js';
import { I as Icon } from './Icon-Dg-p2Y8u.js';

const css = {
  code: "main.svelte-12uu9cv.svelte-12uu9cv{display:grid;min-height:100vh;background:var(--color-gray-9);color:white}.logo.svelte-12uu9cv.svelte-12uu9cv{display:flex;justify-content:center;width:100%;margin-bottom:2rem}.logo.svelte-12uu9cv .logo-container.svelte-12uu9cv{width:10rem}header.svelte-12uu9cv h1.svelte-12uu9cv{text-align:left;font-weight:500;font-size:24px;line-height:24px;padding-bottom:1rem}header.svelte-12uu9cv p.svelte-12uu9cv{color:var(--color-gray-3);padding-bottom:1.5rem}.error.svelte-12uu9cv.svelte-12uu9cv{color:#f72228;margin-bottom:1rem}.left.svelte-12uu9cv.svelte-12uu9cv{padding:3rem clamp(3rem, 10vw, 160px);display:flex;flex-direction:column;align-items:center;justify-content:center}.box.svelte-12uu9cv.svelte-12uu9cv{width:100%;max-width:450px;padding:2.5rem;border-radius:6px;background-color:#1a1a1a}.form.svelte-12uu9cv.svelte-12uu9cv{display:grid;gap:2rem;width:100%}.form.svelte-12uu9cv .fields.svelte-12uu9cv{display:grid;gap:1rem}.form.svelte-12uu9cv label.svelte-12uu9cv{color:#b6b6b6;display:grid;gap:0.5rem;font-size:0.875rem;font-weight:400}.form.svelte-12uu9cv input.svelte-12uu9cv{color:#dadada;border-radius:0.25rem;border:1px solid #6e6e6e;padding:0.75rem;background-color:#1c1c1c;font-size:1rem}.form.svelte-12uu9cv .button.svelte-12uu9cv{color:#cecece;font-weight:500;display:flex;flex-direction:row;justify-content:center;align-items:center;padding:0.65rem;border:1.5px solid #35d994;border-radius:0.25rem;transition:0.1s}.form.svelte-12uu9cv .button.svelte-12uu9cv:not([disabled]):hover{background-color:#35d994;transition:0.2s;color:#121212}.form.svelte-12uu9cv .button.svelte-12uu9cv:focus{background-color:#208259}.form.svelte-12uu9cv .button .icon.svelte-12uu9cv{animation:svelte-12uu9cv-icon-spin 1s linear infinite}.form.svelte-12uu9cv .button[disabled].svelte-12uu9cv{opacity:0.5;cursor:not-allowed}@keyframes svelte-12uu9cv-icon-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let error;
  let signing_in;
  let signup_disabled;
  let $page, $$unsubscribe_page;
  let $navigating, $$unsubscribe_navigating;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_navigating = subscribe(navigating, (value) => $navigating = value);
  let { form } = $$props;
  let email = $page.url.searchParams.get("email") || "";
  let password = "";
  let password_confirm = "";
  if ($$props.form === undefined && $$bindings.form && form !== undefined)
    $$bindings.form(form);
  $$result.css.add(css);
  error = form?.error;
  signing_in = $page.url.searchParams.has("signup") ? false : true;
  signup_disabled = true;
  $$unsubscribe_page();
  $$unsubscribe_navigating();
  return `<main class="primo-reset svelte-12uu9cv"><div class="left svelte-12uu9cv"><div class="logo svelte-12uu9cv"><div class="logo-container svelte-12uu9cv">${validate_component(ServerLogo, "ServerLogo").$$render($$result, {}, {}, {})}</div></div>
			<div class="box svelte-12uu9cv"><header class="svelte-12uu9cv">
					<h1 class="svelte-12uu9cv">${escape(signing_in ? "Sign in" : "Create your account")}</h1>
					${!signing_in ? `<p class="svelte-12uu9cv">Welcome to your new Primo server! Enter an email address and password you&#39;ll use to
							administrate this server.
						</p>` : ``}</header>
				${error ? `<div class="error svelte-12uu9cv">${escape(error)}</div>` : ``}
				<form class="form svelte-12uu9cv" method="POST" action="${"?/" + escape(signing_in ? "sign_in" : "sign_up", true)}"><div class="fields svelte-12uu9cv"><label class="svelte-12uu9cv"><span>Email</span>
							<input type="text" name="email" class="svelte-12uu9cv"${add_attribute("value", email, 0)}></label>
						<label class="svelte-12uu9cv"><span>Password</span>
							<input type="password" name="password" class="svelte-12uu9cv"${add_attribute("value", password, 0)}></label>
						${!signing_in ? `<label class="svelte-12uu9cv"><span>Confirm password</span>
								<input type="password" name="password" class="svelte-12uu9cv"${add_attribute("value", password_confirm, 0)}></label>` : ``}</div>
					<button class="button svelte-12uu9cv" type="submit" ${(signing_in ? false : signup_disabled) ? "disabled" : ""}>${!$navigating ? `${signing_in ? `<span>Sign in</span>` : `<span>Sign up</span>`}` : `<div class="icon svelte-12uu9cv">${validate_component(Icon, "Icon").$$render($$result, { icon: "gg:spinner" }, {}, {})}</div>`}</button></form></div></div></main>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-C0zw4VSH.js.map
