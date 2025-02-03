import { c as create_ssr_component, a as subscribe, k as set_store_value, v as validate_component, b as add_attribute, e as each, d as escape } from './index3-UOcDFV3P.js';
import { isEqual, cloneDeep } from 'lodash-es';
import { k as showingIDE, s as symbols$1, e as sections, p as code, o as code$1, D as content$1, i as fields$1, E as url$1, n as name$1, j as id$1, q as locale, B as locked_blocks, F as ComponentNode, G as processCSS, g as getPageData, H as processCode, J as wrapInStyleTags } from './FileSaver.min-DRdcPaqH.js';
import { I as Icon } from './Icon-Dg-p2Y8u.js';

const SHADOW_ITEM_MARKER_PROPERTY_NAME = "isDndShadowItem";

function client_method(key) {
  {
    {
      return () => {
      };
    }
  }
}
const afterNavigate = /* @__PURE__ */ client_method();
const css$2 = {
  code: "svg.svelte-1qcg8lf.svelte-1qcg8lf{width:var(--Spinner-size, 2rem);height:var(--Spinner-size, 2rem);margin-top:var(--Spinner-mt, 0);margin-bottom:var(--Spinner-mb, 0);margin-right:var(--Spinner-mr, 0);margin-left:var(--Spinner-ml, 0);animation:svelte-1qcg8lf-spin 1s linear infinite;color:var(--color-white)}svg.svelte-1qcg8lf circle.svelte-1qcg8lf{opacity:0.25}svg.svelte-1qcg8lf path.svelte-1qcg8lf{opacity:0.75}@keyframes svelte-1qcg8lf-spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}",
  map: null
};
const Spinner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="svelte-1qcg8lf"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" class="svelte-1qcg8lf"></circle><path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" class="svelte-1qcg8lf"></path></svg>`;
});
const css = {
  code: ".locked-overlay.svelte-192g5m5{color:var(--color-gray-1);box-shadow:inset 0 0 0 calc(4px) var(--color-gray-8);z-index:999999;position:absolute;inset:0px;background:rgba(0, 0, 0, 0.7);display:flex;align-items:center;justify-content:center;gap:0.25rem}",
  map: null
};
const LockedOverlay = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { locked } = $$props;
  if ($$props.locked === undefined && $$bindings.locked && locked !== undefined)
    $$bindings.locked(locked);
  $$result.css.add(css);
  return `<div class="locked-overlay primo-reset svelte-192g5m5">${validate_component(Icon, "Icon").$$render($$result, { icon: "carbon:locked" }, {}, {})}
	<span>Being edited by ${escape(locked.user)}</span>
</div>`;
});
const css$1 = {
  code: ".spinner-container.svelte-rz9bhu{position:absolute;top:0;left:0;right:0;height:100vh;display:flex;align-items:center;justify-content:center;z-index:5;pointer-events:none;--Spinner-color:var(--primo-color-brand);--Spinner-color-opaque:rgba(248, 68, 73, 0.2)}#page.svelte-rz9bhu{transition:0.2s opacity;opacity:0;border-top:0;height:calc(100vh - 54px);overflow:auto}#page.fadein.svelte-rz9bhu{opacity:1}.empty-state.svelte-rz9bhu{position:absolute;inset:0;display:flex;justify-content:center;align-items:center;color:var(--color-gray-4);pointer-events:none;font-family:Inter, sans-serif;color:#999;z-index:1;text-align:center}.block-placeholder.svelte-rz9bhu{position:absolute;inset:0;visibility:visible;margin:0;display:flex;align-items:center;box-shadow:inset 0 0 0 calc(4px) var(--color-gray-8)}.block-placeholder.svelte-rz9bhu .node{position:absolute}.block-placeholder.svelte-rz9bhu::after{content:'';position:absolute;inset:0;background:rgba(0, 0, 0, 0.75);z-index:99}",
  map: null
};
function append_to_head(code2) {
  const tempContainer = document.createElement("div");
  tempContainer.innerHTML = code2;
  Array.from(tempContainer.childNodes).forEach((child) => {
    if (child.tagName === "SCRIPT") {
      const script = document.createElement("script");
      script.textContent = child.textContent;
      Array.from(child.attributes).forEach((attr) => {
        script.setAttribute(attr.name, attr.value);
      });
      document.head.appendChild(script);
    } else {
      document.head.appendChild(child);
    }
  });
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let page_is_empty;
  let $$unsubscribe_showingIDE;
  let $$unsubscribe_symbols;
  let $sections, $$unsubscribe_sections;
  let $siteCode, $$unsubscribe_siteCode;
  let $pageCode, $$unsubscribe_pageCode;
  let $pageContent, $$unsubscribe_pageContent;
  let $pageFields, $$unsubscribe_pageFields;
  let $pageURL, $$unsubscribe_pageURL;
  let $pageName, $$unsubscribe_pageName;
  let $pageID, $$unsubscribe_pageID;
  let $locale, $$unsubscribe_locale;
  let $locked_blocks, $$unsubscribe_locked_blocks;
  $$unsubscribe_showingIDE = subscribe(showingIDE, (value) => value);
  $$unsubscribe_symbols = subscribe(symbols$1, (value) => value);
  $$unsubscribe_sections = subscribe(sections, (value) => $sections = value);
  $$unsubscribe_siteCode = subscribe(code, (value) => $siteCode = value);
  $$unsubscribe_pageCode = subscribe(code$1, (value) => $pageCode = value);
  $$unsubscribe_pageContent = subscribe(content$1, (value) => $pageContent = value);
  $$unsubscribe_pageFields = subscribe(fields$1, (value) => $pageFields = value);
  $$unsubscribe_pageURL = subscribe(url$1, (value) => $pageURL = value);
  $$unsubscribe_pageName = subscribe(name$1, (value) => $pageName = value);
  $$unsubscribe_pageID = subscribe(id$1, (value) => $pageID = value);
  $$unsubscribe_locale = subscribe(locale, (value) => $locale = value);
  $$unsubscribe_locked_blocks = subscribe(locked_blocks, (value) => $locked_blocks = value);
  let { page } = $$props;
  set_page_content(page);
  async function set_page_content(page_data) {
    set_store_value(sections, $sections = page_data.sections, $sections);
    set_store_value(id$1, $pageID = page_data.id, $pageID);
    set_store_value(name$1, $pageName = page_data.name, $pageName);
    set_store_value(url$1, $pageURL = page_data.url, $pageURL);
    set_store_value(fields$1, $pageFields = page_data.fields, $pageFields);
    set_store_value(code$1, $pageCode = page_data.code, $pageCode);
    set_store_value(content$1, $pageContent = page_data.content, $pageContent);
  }
  const cached = { pageCode: null, siteCode: null };
  let latest_run;
  async function set_page_html(pageCode, siteCode) {
    if (isEqual(pageCode, cached.pageCode) && isEqual(siteCode, cached.siteCode))
      return;
    const this_run = Date.now();
    cached.pageCode = cloneDeep(pageCode);
    cached.siteCode = cloneDeep(siteCode);
    const css2 = await processCSS(siteCode.css + pageCode.css);
    if (latest_run > this_run)
      return;
    latest_run = this_run;
    const data = getPageData({});
    const [head, below] = await Promise.all([
      processCode({
        component: {
          html: `<svelte:head>
            ${siteCode.html.head}${pageCode.html.head}
            ${wrapInStyleTags(css2)}
          </svelte:head>`,
          css: "",
          js: "",
          data
        }
      }),
      processCode({
        component: {
          html: siteCode.html.below + pageCode.html.below,
          css: "",
          js: "",
          data
        }
      })
    ]);
    if (!head.error) {
      append_to_head(head.head);
    } else {
      console.warn(head.error);
    }
  }
  let page_mounted = false;
  let sections_mounted = 0;
  afterNavigate(() => {
    page_mounted = false;
    sections_mounted = 0;
  });
  let draggable_sections = $sections.map((s) => ({ ...s, _drag_id: s.id }));
  async function refresh_sections(_) {
    draggable_sections = $sections.map((s) => ({ ...s, _drag_id: s.id }));
  }
  let page_el;
  if ($$props.page === undefined && $$bindings.page && page !== undefined)
    $$bindings.page(page);
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      set_page_content(page);
    }
    {
      set_page_html($pageCode, $siteCode);
    }
    page_is_empty = $sections.length === 0;
    {
      if (sections_mounted === $sections.length && sections_mounted !== 0) {
        page_mounted = true;
      }
    }
    {
      refresh_sections();
    }
    $$rendered = `
${!page_mounted && $sections.length > 0 ? `<div class="spinner-container svelte-rz9bhu">${validate_component(Spinner, "Spinner").$$render($$result, {}, {}, {})}</div>` : ``}


${``}


<div id="page"${add_attribute("lang", $locale, 0)} class="${["svelte-rz9bhu", page_mounted ? "fadein" : ""].join(" ").trim()}"${add_attribute("this", page_el, 0)}>${each(draggable_sections, (block) => {
      let locked = $locked_blocks.includes(block.id);
      return `<div class="${["section svelte-rz9bhu", locked ? "locked" : ""].join(" ").trim()}" id="${"section-" + escape(block.id.split("-")[0], true)}"${add_attribute("data-block", block.symbol, 0)} style="min-height: 3rem;overflow:hidden;position: relative;">${block[SHADOW_ITEM_MARKER_PROPERTY_NAME] ? `<div class="block-placeholder svelte-rz9bhu">${validate_component(ComponentNode, "ComponentNode").$$render(
        $$result,
        {
          primo_symbol: block.primo_symbol,
          block: { ...block, symbol: block.id }
        },
        {},
        {}
      )}
				</div>` : `${locked ? `${validate_component(LockedOverlay, "LockedOverlay").$$render($$result, { locked }, {}, {})}` : ``}
				${validate_component(ComponentNode, "ComponentNode").$$render($$result, { block }, {}, {})}`}
		</div>`;
    })}</div>
<!-- HTML_TAG_START -->${""}<!-- HTML_TAG_END -->


${page_is_empty ? `<div class="empty-state svelte-rz9bhu">This is an empty page</div>` : ``}`;
  } while (!$$settled);
  $$unsubscribe_showingIDE();
  $$unsubscribe_symbols();
  $$unsubscribe_sections();
  $$unsubscribe_siteCode();
  $$unsubscribe_pageCode();
  $$unsubscribe_pageContent();
  $$unsubscribe_pageFields();
  $$unsubscribe_pageURL();
  $$unsubscribe_pageName();
  $$unsubscribe_pageID();
  $$unsubscribe_locale();
  $$unsubscribe_locked_blocks();
  return $$rendered;
});

export { Page as P };
//# sourceMappingURL=Page-VH9T-lso.js.map
