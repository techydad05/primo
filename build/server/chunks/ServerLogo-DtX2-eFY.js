import { c as create_ssr_component, a as subscribe, b as add_attribute } from './index3-UOcDFV3P.js';
import { p as page } from './stores-B5bpgGi-.js';

const logo = "/_app/immutable/assets/server-logo.68a86b54.svg";
const css = {
  code: ".logo.svelte-ci5q13{width:100%}img.svelte-ci5q13{width:100%}",
  map: null
};
const ServerLogo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $page.data;
  let image_url = logo;
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<div class="logo svelte-ci5q13">
  <img${add_attribute("src", image_url, 0)} class="svelte-ci5q13">
</div>`;
});

export { ServerLogo as S };
//# sourceMappingURL=ServerLogo-DtX2-eFY.js.map
