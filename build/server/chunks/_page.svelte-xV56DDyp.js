import { c as create_ssr_component, a as subscribe, v as validate_component, e as each, d as escape, b as add_attribute, q as getContext } from './index3-UOcDFV3P.js';
import { I as Icon } from './Icon-Dg-p2Y8u.js';
import { p as page } from './stores-B5bpgGi-.js';
import './FileSaver.min-DRdcPaqH.js';
import 'axios';
import './index4-C-_nEMH7.js';
import 'timeago.js';
import { S as ServerLogo } from './ServerLogo-DtX2-eFY.js';
import 'lodash-es';
import './index2-B3uZdIkT.js';
import './_commonjsHelpers-BFTU3MAI.js';
import 'nanoid/non-secure';
import 'crypto';
import './public-C_Z4GS8g.js';
import '@supabase/supabase-js';

const css$4 = {
  code: ".iframe-root.svelte-1qbdxvj{pointer-events:none;overflow:hidden;position:relative;padding-top:var(--thumbnail-height, 75%)}.iframe-container.svelte-1qbdxvj{position:absolute;inset:0;z-index:10;background:transparent;opacity:1;transition:opacity 0.1s;width:100%;height:100%;font-size:0.75rem;line-height:1rem;overflow:hidden;overflow-wrap:break-word}iframe.svelte-1qbdxvj{pointer-events:none;opacity:0;transition:opacity 0.1s;background:var(--color-white);width:100vw;will-change:opacity;transform-origin:top left;height:1000vh}.fadein.svelte-1qbdxvj{opacity:1}",
  map: null
};
const SiteThumbnail = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const { supabase } = $page.data;
  let { site } = $$props;
  let { preview = null } = $$props;
  if (!preview && site) {
    supabase.storage.from("sites").download(`${site.id}/preview.html`).then(({ data, error }) => {
      if (error) {
        console.log("Error downloading file: ", error.message);
      }
    });
  }
  let container;
  setTimeout(
    () => {
    },
    500
  );
  if ($$props.site === undefined && $$bindings.site && site !== undefined)
    $$bindings.site(site);
  if ($$props.preview === undefined && $$bindings.preview && preview !== undefined)
    $$bindings.preview(preview);
  $$result.css.add(css$4);
  $$unsubscribe_page();
  return `

<div class="iframe-root svelte-1qbdxvj"><div class="iframe-container svelte-1qbdxvj"${add_attribute("this", container, 0)}>${``}</div>
</div>`;
});
const css$3 = {
  code: ".letter.svelte-1pg8fna{height:26px;width:26px;display:flex;align-items:center;justify-content:center;background:#81a6fd;color:white;font-weight:400;font-size:14px;line-height:0;border-radius:50%}.inner-letter.svelte-1pg8fna{position:relative}",
  map: null
};
const Letter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { letter = "b" } = $$props;
  if ($$props.letter === undefined && $$bindings.letter && letter !== undefined)
    $$bindings.letter(letter);
  $$result.css.add(css$3);
  return `<span class="letter svelte-1pg8fna"><span class="inner-letter svelte-1pg8fna">${escape(letter)}</span>
</span>`;
});
const css$2 = {
  code: ".MenuPopup.svelte-1u5so7j.svelte-1u5so7j{position:relative;opacity:var(--MenuPopup-opacity, 1)}button.open-popup.svelte-1u5so7j.svelte-1u5so7j{display:flex;align-items:center;gap:0.25rem}.popup.svelte-1u5so7j.svelte-1u5so7j{padding:14px;display:grid;gap:0.375rem;place-items:normal;font-size:0.75rem;border-radius:0.25rem;position:absolute;right:0;top:39px;background:#171717;border:1px solid #292929;z-index:99;min-width:190px}.popup.svelte-1u5so7j .email.svelte-1u5so7j{font-size:14px}.popup.svelte-1u5so7j hr.svelte-1u5so7j{border-color:#222;margin:0.25rem 0;transform:scale(1.08);transform-origin:center}.popup.svelte-1u5so7j .row.svelte-1u5so7j{display:flex;align-items:center;gap:0.75rem}.popup.svelte-1u5so7j .icon.svelte-1u5so7j{font-size:1.125rem}.popup.svelte-1u5so7j button.svelte-1u5so7j{display:flex;align-items:center;gap:0.25rem;border-radius:0.25rem;padding:0.5rem 0.75rem;width:100%;text-align:left;white-space:nowrap;font-size:14px}.popup.svelte-1u5so7j button.svelte-1u5so7j:hover{background:#292929}",
  map: null
};
const UserPopup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const { user, supabase } = $page.data;
  $$result.css.add(css$2);
  $$unsubscribe_page();
  return `<div class="MenuPopup svelte-1u5so7j"><button class="open-popup svelte-1u5so7j">${validate_component(Letter, "Letter").$$render($$result, { letter: user.email.slice(0, 1) }, {}, {})}
		${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "mdi:chevron-down"
    },
    {},
    {}
  )}</button>

	${``}
</div>`;
});
const css$1 = {
  code: "header.svelte-w4v1k2.svelte-w4v1k2{display:flex;justify-content:space-between;align-items:center;color:var(--color-gray-3);margin-bottom:1rem}.nav.svelte-w4v1k2.svelte-w4v1k2{display:flex;gap:1.25rem;align-items:center}.logo.svelte-w4v1k2.svelte-w4v1k2{width:7rem;-o-object-fit:contain;object-fit:contain}.link.svelte-w4v1k2.svelte-w4v1k2{border-bottom:2px solid transparent;display:flex;font-size:14px}.link.svelte-w4v1k2.svelte-w4v1k2:hover{border-color:var(--primo-color-brand)}.link.with-icon.svelte-w4v1k2.svelte-w4v1k2{display:grid;grid-template-columns:auto auto;gap:0.5rem;place-items:center}nav.svelte-w4v1k2.svelte-w4v1k2{display:flex;align-items:center;gap:1rem}nav.svelte-w4v1k2 .link.svelte-w4v1k2:last-child{margin-right:0}",
  map: null
};
const DashboardToolbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css$1);
  $$unsubscribe_page();
  return `<header role="navigation" aria-label="main navigation" class="svelte-w4v1k2"><div class="logo svelte-w4v1k2">${validate_component(ServerLogo, "ServerLogo").$$render($$result, {}, {}, {})}</div>
	<nav class="nav svelte-w4v1k2">${$page.data.user.admin ? `<button class="link svelte-w4v1k2">Members</button>` : ``}
		${$page.data.user.role === "DEV" ? `<a class="link with-icon svelte-w4v1k2" href="https://docs.primocms.org/" target="blank"><span class="docs">Docs</span>
				${validate_component(Icon, "Icon").$$render($$result, { icon: "gridicons:external" }, {}, {})}</a>` : ``}
		${validate_component(UserPopup, "UserPopup").$$render($$result, {}, {}, {})}</nav>
</header>`;
});
const css = {
  code: "main.svelte-1vte7q0.svelte-1vte7q0.svelte-1vte7q0{background-color:var(--primo-color-black);min-height:100vh;position:relative;z-index:0}main.svelte-1vte7q0 .container.svelte-1vte7q0.svelte-1vte7q0{display:flex;flex-direction:column;border-radius:var(--primo-border-radius);margin:0 auto;padding:1rem 2rem;min-height:100vh}main.svelte-1vte7q0 .sites-container.svelte-1vte7q0.svelte-1vte7q0{display:grid;gap:1rem}main.svelte-1vte7q0 .sites-container header a.svelte-1vte7q0.svelte-1vte7q0{text-decoration:underline;color:var(--color-gray-4)}main.svelte-1vte7q0 .sites-container ul.sites.svelte-1vte7q0.svelte-1vte7q0{display:grid;gap:1rem}main.svelte-1vte7q0 .sites-container ul.sites li.svelte-1vte7q0.svelte-1vte7q0{background:var(--color-gray-9);border-radius:var(--primo-border-radius);overflow:hidden;font-size:var(--font-size-4);transition:0.1s box-shadow;display:flex;flex-direction:column;justify-content:flex-start;transition:0.1s box-shadow}main.svelte-1vte7q0 .sites-container ul.sites li.svelte-1vte7q0.svelte-1vte7q0:has(a:hover){box-shadow:var(--primo-ring-brand-thick)}main.svelte-1vte7q0 .sites-container ul.sites li.svelte-1vte7q0:has(a:hover)~li.svelte-1vte7q0:last-child{box-shadow:var(--primo-ring-brand-thin)}main.svelte-1vte7q0 .sites-container ul.sites li.svelte-1vte7q0.svelte-1vte7q0:last-child{box-shadow:var(--primo-ring-brand)}main.svelte-1vte7q0 .sites-container ul.sites li .site-link.svelte-1vte7q0.svelte-1vte7q0{overflow:hidden;max-height:16vw;flex:1;background:var(--color-gray-8);transition:opacity 0.1s}main.svelte-1vte7q0 .sites-container ul.sites li .site-info.svelte-1vte7q0.svelte-1vte7q0{color:var(--color-gray-1);display:flex;flex-direction:column;justify-content:flex-start;padding:1.5rem}main.svelte-1vte7q0 .sites-container ul.sites li .site-info .site-name form.svelte-1vte7q0.svelte-1vte7q0{line-height:0}main.svelte-1vte7q0 .sites-container ul.sites li .site-info .site-name a.svelte-1vte7q0.svelte-1vte7q0{display:flex;justify-content:space-between}main.svelte-1vte7q0 .sites-container ul.sites li .site-info .site-name a.svelte-1vte7q0.svelte-1vte7q0:hover{color:var(--primo-color-brand)}main.svelte-1vte7q0 .sites-container ul.sites li .site-info .site-name a.svelte-1vte7q0.svelte-1vte7q0,main.svelte-1vte7q0 .sites-container ul.sites li .site-info .site-name input.svelte-1vte7q0.svelte-1vte7q0{text-align:left;font-size:1.125rem;font-weight:500}main.svelte-1vte7q0 .sites-container ul.sites li .site-info .site-name button.svelte-1vte7q0.svelte-1vte7q0{border-radius:var(--primo-border-radius);padding:0 0.5rem}main.svelte-1vte7q0 .sites-container ul.sites li .site-info .site-name button.svelte-1vte7q0.svelte-1vte7q0:hover{color:var(--primo-color-brand)}main.svelte-1vte7q0 .sites-container ul.sites li .site-info .site-url.svelte-1vte7q0.svelte-1vte7q0{grid-column:1;margin-bottom:0.5rem;font-size:var(--font-size-1);color:var(--color-gray-4)}main.svelte-1vte7q0 .sites-container ul.sites li .site-info .buttons.svelte-1vte7q0.svelte-1vte7q0{grid-column:1;display:flex;align-items:center;color:var(--color-gray-3);margin-top:0.5rem}main.svelte-1vte7q0 .sites-container ul.sites li .site-info .buttons button.svelte-1vte7q0.svelte-1vte7q0{margin-right:0.75rem}main.svelte-1vte7q0 .sites-container ul.sites li .site-info .buttons button span.svelte-1vte7q0.svelte-1vte7q0{margin-left:0.25rem}main.svelte-1vte7q0 .sites-container ul.sites .icon.svelte-1vte7q0.svelte-1vte7q0{font-size:1.5rem}main.svelte-1vte7q0 .sites-container ul.sites button.create-site.svelte-1vte7q0.svelte-1vte7q0{padding:3rem;display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;height:100%;background:var(--primo-color-black);font-weight:400;font-size:1.125rem;color:var(--color-gray-2)}main.svelte-1vte7q0 .sites-container ul.sites button.create-site.svelte-1vte7q0.svelte-1vte7q0:active{background:var(--primo-color-brand);color:var(--primo-color-black)}.site-button.svelte-1vte7q0.svelte-1vte7q0.svelte-1vte7q0{display:flex;align-items:center;font-size:0.75rem;color:var(--color-gray-2);text-decoration:underline;text-align:left}.site-button.svelte-1vte7q0.svelte-1vte7q0.svelte-1vte7q0:hover{color:var(--primo-color-brand)}button.svelte-1vte7q0.svelte-1vte7q0.svelte-1vte7q0{transition:color 0.1s,\n      background-color 0.1s}button.svelte-1vte7q0.svelte-1vte7q0.svelte-1vte7q0:focus{outline:2px solid var(--primo-color-brand)}button.svelte-1vte7q0.svelte-1vte7q0.svelte-1vte7q0:disabled{opacity:0.5;pointer-events:none}.reset-input.svelte-1vte7q0.svelte-1vte7q0.svelte-1vte7q0{border:none;background-image:none;background-color:transparent;box-shadow:none;background:transparent;border:0;padding:0;margin:0}.reset-input.svelte-1vte7q0.svelte-1vte7q0.svelte-1vte7q0:focus{outline:0}@media(min-width: 600px){main.svelte-1vte7q0 .sites-container ul.sites.svelte-1vte7q0.svelte-1vte7q0{grid-template-columns:1fr 1fr}}@media(min-width: 900px){main.svelte-1vte7q0 .sites-container ul.sites.svelte-1vte7q0.svelte-1vte7q0{grid-template-columns:1fr 1fr 1fr}}@media(min-width: 1200px){main.svelte-1vte7q0 .sites-container ul.sites.svelte-1vte7q0.svelte-1vte7q0{grid-template-columns:1fr 1fr 1fr 1fr}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  let siteBeingEdited = { id: null, element: null };
  if ($$props.data === undefined && $$bindings.data && data !== undefined)
    $$bindings.data(data);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<main class="primo-reset svelte-1vte7q0"><div class="container svelte-1vte7q0">${validate_component(DashboardToolbar, "DashboardToolbar").$$render($$result, {}, {}, {})}
    <div class="sites-container svelte-1vte7q0"><ul class="sites svelte-1vte7q0">${each(data.sites, (site, i) => {
    return `<li class="svelte-1vte7q0"><a class="site-link svelte-1vte7q0"${add_attribute("href", site.url, 0)}>${validate_component(SiteThumbnail, "SiteThumbnail").$$render($$result, { site }, {}, {})}</a>
            <div class="site-info svelte-1vte7q0"><div class="site-name">${siteBeingEdited.id === site.id ? `<form class="svelte-1vte7q0"><input class="reset-input svelte-1vte7q0" type="text"${add_attribute("this", siteBeingEdited.element, 0)}${add_attribute("value", site.name, 0)}>
                  </form>` : `<a data-sveltekit-prefetch${add_attribute("href", site.url, 0)} class="svelte-1vte7q0"><span class="svelte-1vte7q0">${escape(site.name)}</span>
                    ${validate_component(Icon, "Icon").$$render($$result, { icon: "ic:round-chevron-right" }, {}, {})}
                  </a>`}</div>
              <span class="site-url svelte-1vte7q0">${escape(site.url)}</span>
              ${getContext("DEBUGGING") ? `<button style="font-size:0.75rem;cursor:pointer;text-align:left" class="svelte-1vte7q0">${escape(site.id)}
                </button>` : ``}
              ${$page.data.user.admin ? `<div class="buttons svelte-1vte7q0"><button class="site-button svelte-1vte7q0">${validate_component(Icon, "Icon").$$render($$result, { icon: "clarity:users-solid" }, {}, {})}
                    <span class="svelte-1vte7q0">Collaborators</span></button>
                  <button class="site-button svelte-1vte7q0">${validate_component(Icon, "Icon").$$render(
      $$result,
      {
        icon: "material-symbols:edit-square-outline-rounded"
      },
      {},
      {}
    )}
                    <span class="svelte-1vte7q0">Rename</span></button>
                  <button class="site-button svelte-1vte7q0">${validate_component(Icon, "Icon").$$render($$result, { icon: "pepicons-pop:trash" }, {}, {})}
                    <span class="svelte-1vte7q0">Delete</span></button>
                </div>` : ``}</div>
          </li>`;
  })}
        ${data.user.server_member ? `<li class="svelte-1vte7q0"><button class="create-site svelte-1vte7q0">${`<div class="icon svelte-1vte7q0">${validate_component(Icon, "Icon").$$render($$result, { icon: "ic:round-plus" }, {}, {})}</div>`}
              Create a site
            </button></li>` : ``}</ul></div></div>
</main>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-xV56DDyp.js.map
