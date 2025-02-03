import { c as create_ssr_component, v as validate_component, a as subscribe, b as add_attribute, e as each, d as escape, f as createEventDispatcher, g as compute_rest_props, h as spread, n as null_to_empty, i as escape_attribute_value, j as escape_object, m as missing_component } from './index3-UOcDFV3P.js';
import { l as loadIcons, I as Icon, e as enableCache } from './Icon-Dg-p2Y8u.js';
import './FileSaver.min-DRdcPaqH.js';
import axios from 'axios';
import { w as writable } from './index2-B3uZdIkT.js';
import { s as supabase_client } from './index4-C-_nEMH7.js';
import * as timeago from 'timeago.js';
import { p as page } from './stores-B5bpgGi-.js';
import 'lodash-es';
import './_commonjsHelpers-BFTU3MAI.js';
import 'nanoid/non-secure';
import 'crypto';
import './public-C_Z4GS8g.js';
import '@supabase/supabase-js';

const css$b = {
  code: "svg.svelte-1q318ht.svelte-1q318ht{width:var(--Spinner-size, 2rem);height:var(--Spinner-size, 2rem);margin-top:var(--Spinner-mt, 0);margin-bottom:var(--Spinner-mb, 0);margin-right:var(--Spinner-mr, 0);margin-left:var(--Spinner-ml, 0);animation:svelte-1q318ht-spin 1s linear infinite;color:var(--color-white)}svg.svelte-1q318ht circle.svelte-1q318ht{opacity:0.25}svg.svelte-1q318ht path.svelte-1q318ht{opacity:0.75}@keyframes svelte-1q318ht-spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}",
  map: null
};
const Spinner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$b);
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="svelte-1q318ht"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" class="svelte-1q318ht"></circle><path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" class="svelte-1q318ht"></path></svg>`;
});
const css$a = {
  code: "label.svelte-9yo6bd.svelte-9yo6bd{display:block;margin-bottom:0.5rem}label.svelte-9yo6bd .label.svelte-9yo6bd{font-size:12px}label.svelte-9yo6bd>span.svelte-9yo6bd{color:var(--color-gray-1);font-size:0.875rem;line-height:1.25rem;margin-bottom:0.25rem;display:block}label.svelte-9yo6bd>div.svelte-9yo6bd{display:flex;align-items:center;justify-content:center;border-radius:0.25rem;overflow:hidden;background-color:var(--color-gray-8)}label.svelte-9yo6bd>div .prefix.svelte-9yo6bd{display:inline-flex;align-items:center;padding:0 0.75rem;border-top-left-radius:0.375rem;border-bottom-left-radius:0.375rem;border-right-width:1px;border-color:var(--color-gray-7);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}label.svelte-9yo6bd>div input.svelte-9yo6bd{color:var(--color-gray-1);display:block;width:100%;background:transparent;padding:0.5rem}label.svelte-9yo6bd>div input.svelte-9yo6bd:focus{outline:0}input.svelte-9yo6bd.svelte-9yo6bd{border:0}input.svelte-9yo6bd.svelte-9yo6bd:focus{outline:0}",
  map: null
};
const TextField = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["value", "label", "prefix", "variants"]);
  createEventDispatcher();
  let { value } = $$props;
  let { label = null } = $$props;
  let { prefix = null } = $$props;
  let { variants = "" } = $$props;
  if ($$props.value === undefined && $$bindings.value && value !== undefined)
    $$bindings.value(value);
  if ($$props.label === undefined && $$bindings.label && label !== undefined)
    $$bindings.label(label);
  if ($$props.prefix === undefined && $$bindings.prefix && prefix !== undefined)
    $$bindings.prefix(prefix);
  if ($$props.variants === undefined && $$bindings.variants && variants !== undefined)
    $$bindings.variants(variants);
  $$result.css.add(css$a);
  return `
<label class="${escape(null_to_empty(variants), true) + " svelte-9yo6bd"}">${slots.default ? slots.default({}) : `<span class="label svelte-9yo6bd">${escape(label)}</span>`}
  <div class="svelte-9yo6bd">${prefix ? `<span class="prefix svelte-9yo6bd">${escape(prefix)}</span>` : ``}
    <input${spread([escape_object($$restProps), { type: "text" }], { classes: "svelte-9yo6bd" })}${add_attribute("value", value, 0)}></div>
</label>`;
});
const css$9 = {
  code: "button.svelte-14nslv1.svelte-14nslv1,label.svelte-14nslv1.svelte-14nslv1{--Spinner-size:1rem;cursor:pointer;display:flex;justify-content:center;align-items:center;padding:0.5rem 1rem;border-radius:0.25rem;font-weight:400;font-size:14px;box-shadow:var(--primo-ring-brand);color:var(--primo-color-white);transition:box-shadow 0.1s, background 0.1s, color 0.1s;margin:var(--space-y, 0) var(--space-x, 0)}button.svelte-14nslv1.svelte-14nslv1:hover,label.svelte-14nslv1.svelte-14nslv1:hover{box-shadow:var(--primo-ring-brand-thick)}button.svelte-14nslv1.svelte-14nslv1:active,label.svelte-14nslv1.svelte-14nslv1:active{background:var(--primo-color-brand);color:var(--primo-color-black)}button[type='submit'].svelte-14nslv1.svelte-14nslv1{width:100%}button[disabled].svelte-14nslv1.svelte-14nslv1{background:var(--color-gray-6);cursor:not-allowed;box-shadow:none}label.svelte-14nslv1 input.svelte-14nslv1{display:none}.hidden.svelte-14nslv1.svelte-14nslv1{display:none}",
  map: null
};
const PrimaryButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["label", "icon", "id", "variants", "type", "disabled", "loading"]);
  let { label = "" } = $$props;
  let { icon = null } = $$props;
  let { id = null } = $$props;
  let { variants = "" } = $$props;
  let { type: type2 = "button" } = $$props;
  let { disabled = false } = $$props;
  let { loading: loading2 = false } = $$props;
  if ($$props.label === undefined && $$bindings.label && label !== undefined)
    $$bindings.label(label);
  if ($$props.icon === undefined && $$bindings.icon && icon !== undefined)
    $$bindings.icon(icon);
  if ($$props.id === undefined && $$bindings.id && id !== undefined)
    $$bindings.id(id);
  if ($$props.variants === undefined && $$bindings.variants && variants !== undefined)
    $$bindings.variants(variants);
  if ($$props.type === undefined && $$bindings.type && type2 !== undefined)
    $$bindings.type(type2);
  if ($$props.disabled === undefined && $$bindings.disabled && disabled !== undefined)
    $$bindings.disabled(disabled);
  if ($$props.loading === undefined && $$bindings.loading && loading2 !== undefined)
    $$bindings.loading(loading2);
  $$result.css.add(css$9);
  return `${type2 === "input" ? `<label for="primo-json" class="${escape(null_to_empty(variants), true) + " svelte-14nslv1"}">${loading2 ? `${validate_component(Spinner, "Spinner").$$render($$result, {}, {}, {})}` : ``}
    <span class="${["svelte-14nslv1", loading2 ? "hidden" : ""].join(" ").trim()}">${slots.icon ? slots.icon({}) : `
        ${validate_component(Icon, "Icon").$$render($$result, { icon }, {}, {})}
      `}</span>
    ${slots.label ? slots.label({}) : ``}
    ${slots.default ? slots.default({}) : `
      <span class="${["svelte-14nslv1", loading2 ? "hidden" : ""].join(" ").trim()}">${escape(label)}</span>
    `}
    <input type="file" id="primo-json" accept=".json" ${disabled || loading2 ? "disabled" : ""} class="svelte-14nslv1"></label>` : `<button${spread(
    [
      { id: escape_attribute_value(id) },
      { class: escape_attribute_value(variants) },
      { disabled: disabled || loading2 || null },
      escape_object($$restProps),
      { type: escape_attribute_value(type2) }
    ],
    { classes: "svelte-14nslv1" }
  )}>${loading2 ? `${validate_component(Spinner, "Spinner").$$render($$result, {}, {}, {})}` : ``}
    <span class="${["svelte-14nslv1", loading2 ? "hidden" : ""].join(" ").trim()}">${slots.icon ? slots.icon({}) : ``}</span>
    ${slots.label ? slots.label({}) : ``}
    ${slots.default ? slots.default({}) : `
      <span class="${["svelte-14nslv1", loading2 ? "hidden" : ""].join(" ").trim()}">${escape(label)}</span>
    `}</button>`}`;
});
const css$8 = {
  code: ".theme-thumbnail.svelte-1ru6gu9{border-radius:var(--primo-border-radius);background:var(--color-gray-8);overflow:hidden;transition:0.1s box-shadow}.theme-thumbnail.selected.svelte-1ru6gu9{box-shadow:0px 0px 0px 2px var(--primo-color-brand)}.theme-thumbnail.svelte-1ru6gu9:hover{opacity:0.75}.title.svelte-1ru6gu9{font-size:0.75rem;font-weight:500;padding:0.5rem 0.75rem;text-align:left;border-top:1px solid var(--color-gray-9)}",
  map: null
};
const ThemeThumbnail = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { preview } = $$props;
  let { title } = $$props;
  let { selected = false } = $$props;
  if ($$props.preview === undefined && $$bindings.preview && preview !== undefined)
    $$bindings.preview(preview);
  if ($$props.title === undefined && $$bindings.title && title !== undefined)
    $$bindings.title(title);
  if ($$props.selected === undefined && $$bindings.selected && selected !== undefined)
    $$bindings.selected(selected);
  $$result.css.add(css$8);
  return `<button class="${["theme-thumbnail svelte-1ru6gu9", selected ? "selected" : ""].join(" ").trim()}" type="button"><img${add_attribute("src", preview, 0)}${add_attribute("alt", title, 0)}>
  ${title ? `<div class="title svelte-1ru6gu9">${escape(title)}</div>` : ``}
</button>`;
});
const css$7 = {
  code: "header.svelte-1ecrxz4.svelte-1ecrxz4{display:flex;justify-content:space-between}header.svelte-1ecrxz4 h2.svelte-1ecrxz4{font-size:0.875rem;margin-bottom:0.75rem}button.svelte-1ecrxz4.svelte-1ecrxz4{font-size:1.25rem}button.svelte-1ecrxz4.svelte-1ecrxz4:not(:disabled):hover{color:var(--primo-color-brand)}button.svelte-1ecrxz4.svelte-1ecrxz4:disabled{opacity:0.25;cursor:initial}.themes.svelte-1ecrxz4.svelte-1ecrxz4{display:grid;grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));place-items:start;gap:1rem;margin-bottom:1rem}",
  map: null
};
const Themes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let active_themes;
  createEventDispatcher();
  let themes = [];
  axios.get("https://primosites.vercel.app/api/primo-landing-page/themes?sections=ff5c3e56-690b-4220-abe9-9f02a74e1599").then(({ data }) => {
    const [section] = data.sections;
    themes = section.templates.filter((template) => template.price === "0" && template.available);
  });
  let selectedTheme = null;
  let active_theme_page = 0;
  $$result.css.add(css$7);
  active_themes = themes.length > 0 ? themes.slice(active_theme_page * 4, active_theme_page * 4 + 4) : [];
  return `<header class="svelte-1ecrxz4"><h2 class="heading svelte-1ecrxz4">Themes</h2>
  ${themes.length > 0 ? `<div class="buttons"><button type="button" ${"disabled"} class="svelte-1ecrxz4">${validate_component(Icon, "Icon").$$render($$result, { icon: "ic:round-chevron-left" }, {}, {})}</button>
      <button ${active_theme_page >= themes.length / 4 - 1 ? "disabled" : ""} type="button" class="svelte-1ecrxz4">${validate_component(Icon, "Icon").$$render($$result, { icon: "ic:round-chevron-right" }, {}, {})}</button></div>` : ``}</header>
<div class="themes svelte-1ecrxz4">${each(active_themes, (theme) => {
    return `${validate_component(ThemeThumbnail, "ThemeThumbnail").$$render(
      $$result,
      {
        selected: selectedTheme === theme.name,
        title: theme.name,
        preview: theme.screenshots.desktop.url
      },
      {},
      {}
    )}`;
  })}
</div>`;
});
const css$6 = {
  code: ".primo-modal.svelte-os032q.svelte-os032q{max-width:var(--primo-max-width-1)}.primo-modal.svelte-os032q form .name-url.svelte-os032q{margin-bottom:1.5rem;margin-top:0.5rem}.primo-modal.svelte-os032q form .submit.svelte-os032q{--color-link:var(--color-primored)}footer.svelte-os032q.svelte-os032q{display:flex;justify-content:space-between;align-items:center}footer.svelte-os032q .container.svelte-os032q{margin-bottom:1rem;display:flex;align-items:center;gap:0.25rem}footer.svelte-os032q span.svelte-os032q{color:var(--color-gray-3);font-size:0.75rem;text-decoration:underline}#upload-json.svelte-os032q.svelte-os032q{margin-bottom:0.5rem;display:flex;justify-content:flex-start}#upload-json.svelte-os032q label.svelte-os032q{cursor:pointer}#upload-json.svelte-os032q label input.svelte-os032q{display:none}#upload-json.svelte-os032q label span.svelte-os032q{color:var(--color-gray-3);font-size:0.75rem;text-decoration:underline}.site-thumbnail.svelte-os032q.svelte-os032q{margin:1rem 0;border-radius:0.25rem;overflow:hidden;border:1px solid var(--color-gray-8)}.error.svelte-os032q.svelte-os032q{padding:1rem;background:#b00020;margin-bottom:1rem}.creating-site.svelte-os032q.svelte-os032q{display:flex;align-items:center}.creating-site.svelte-os032q>.svelte-os032q{margin:0 1rem}",
  map: null
};
const CreateSite = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let canCreateSite;
  let { onSuccess = (newSite, preview) => {
  } } = $$props;
  let loading2 = false;
  let site_name = ``;
  let site_url = ``;
  let duplicated_site = null;
  let primo_json_valid = true;
  if ($$props.onSuccess === undefined && $$bindings.onSuccess && onSuccess !== undefined)
    $$bindings.onSuccess(onSuccess);
  $$result.css.add(css$6);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    canCreateSite = site_name && site_url && duplicated_site;
    $$rendered = `<main class="primo-reset primo-modal svelte-os032q">${`<h1 class="primo-heading-xl">Create a site</h1>
		<form><div class="name-url svelte-os032q">${validate_component(TextField, "TextField").$$render(
      $$result,
      {
        autofocus: true,
        label: "Site Name",
        value: site_name
      },
      {
        value: ($$value) => {
          site_name = $$value;
          $$settled = false;
        }
      },
      {}
    )}
				${validate_component(TextField, "TextField").$$render(
      $$result,
      { label: "Site URL", value: site_url },
      {
        value: ($$value) => {
          site_url = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>
			${`${`${validate_component(Themes, "Themes").$$render($$result, {}, {}, {})}`}`}
			<footer class="svelte-os032q"><div id="upload-json" class="svelte-os032q"><label class="container svelte-os032q"><input type="file" id="primo-json" accept=".json" class="svelte-os032q">
						${validate_component(Icon, "Icon").$$render($$result, { icon: "carbon:upload" }, {}, {})}
						<span class="svelte-os032q">Duplicate from primo.json</span></label></div></footer>
			<div class="submit svelte-os032q">${validate_component(PrimaryButton, "PrimaryButton").$$render(
      $$result,
      {
        type: "submit",
        label: "Create Site",
        disabled: !canCreateSite && primo_json_valid,
        loading: loading2
      },
      {},
      {}
    )}</div></form>`}
</main>`;
  } while (!$$settled);
  return $$rendered;
});
const css$5 = {
  code: ".label-container.svelte-a3urta.svelte-a3urta{width:100%}.label-container.svelte-a3urta label.svelte-a3urta{display:inline-block}.label-container.svelte-a3urta label .switch-label.svelte-a3urta{font-weight:600;margin-right:1rem}.label-container.svelte-a3urta label .switch-container.svelte-a3urta{position:relative;display:inline-block;width:3.5rem;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;user-select:none;transition:transform 0.1s}.label-container.svelte-a3urta label .switch-container input.svelte-a3urta{color:var(--primo-color-brand);background:var(--primo-color-white);outline:0;position:absolute;top:-4px;display:flex;align-items:center;justify-content:center;width:2rem;height:2rem;border-radius:100%;-webkit-appearance:none;-moz-appearance:none;appearance:none;cursor:pointer;left:0;transition:transform 0.1s}.label-container.svelte-a3urta label .switch-container input.svelte-a3urta:after{content:'\\d7'}.label-container.svelte-a3urta label .switch-container input.svelte-a3urta:checked{transform:translateX(24px)}.label-container.svelte-a3urta label .switch-container input.svelte-a3urta:checked:after{content:'\\2713'}.label-container.svelte-a3urta label .switch-container span.svelte-a3urta{outline:0;display:block;overflow:hidden;height:1.5rem;border-radius:1rem;background:var(--color-gray-7);cursor:pointer}",
  map: null
};
const Switch = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { field } = $$props;
  if ($$props.field === undefined && $$bindings.field && field !== undefined)
    $$bindings.field(field);
  $$result.css.add(css$5);
  return `<div class="label-container svelte-a3urta"><label${add_attribute("for", field.key, 0)} class="svelte-a3urta"><span class="switch-label svelte-a3urta"${add_attribute("for", field.key, 0)}>${escape(field.label)}</span>
    <div class="switch-container svelte-a3urta"><input type="checkbox"${add_attribute("id", field.key, 0)} ${field.value ? "checked" : ""} class="svelte-a3urta">
      <span class="svelte-a3urta"></span></div></label>
</div>`;
});
const css$4 = {
  code: ".primo-modal.svelte-fdy7ct.svelte-fdy7ct{max-width:var(--primo-max-width-1);display:grid;gap:1.5rem}.primo-modal.svelte-fdy7ct h2.svelte-fdy7ct{font-weight:700;font-size:1rem}.primo-modal.svelte-fdy7ct form .options.svelte-fdy7ct{margin-bottom:1.5rem;margin-top:0.5rem}.primo-modal.svelte-fdy7ct form .submit.svelte-fdy7ct{--color-link:var(--color-primored)}.deleting-site.svelte-fdy7ct.svelte-fdy7ct{display:flex;align-items:center}.deleting-site.svelte-fdy7ct>.svelte-fdy7ct{margin:0 1rem}",
  map: null
};
let loading = false;
const DeleteSite = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { site } = $$props;
  if ($$props.site === undefined && $$bindings.site && site !== undefined)
    $$bindings.site(site);
  $$result.css.add(css$4);
  return `<main class="primo-reset primo-modal svelte-fdy7ct">${`<h2 class="svelte-fdy7ct">Delete ${escape(site.name)}</h2>
    <p>Are you sure you want to delete this site? You won&#39;t be able to get it
      back.
    </p>
    <form><div class="options svelte-fdy7ct">${validate_component(Switch, "Switch").$$render(
    $$result,
    {
      field: {
        key: "files",
        label: "Delete site files",
        value: false
      }
    },
    {},
    {}
  )}</div>
      ${site.active_deployment ? `<div class="options svelte-fdy7ct">${validate_component(Switch, "Switch").$$render(
    $$result,
    {
      field: {
        key: "repo",
        label: "Delete Github repo",
        value: false
      }
    },
    {},
    {}
  )}</div>` : ``}
      <div class="submit svelte-fdy7ct">${validate_component(PrimaryButton, "PrimaryButton").$$render(
    $$result,
    {
      type: "submit",
      label: "Delete Site",
      icon: "pepicons-pop:trash",
      loading
    },
    {},
    {}
  )}</div></form>`}
</main>`;
});
const css$3 = {
  code: ".Invitation.svelte-14g7zxm.svelte-14g7zxm{--Modal-align-items:center;padding:1rem 1.5rem;color:var(--color-gray-1)}main.svelte-14g7zxm.svelte-14g7zxm{display:grid;gap:1.5rem;max-width:450px}header.svelte-14g7zxm h2.svelte-14g7zxm{font-weight:700;font-size:1rem;margin-bottom:0.25rem}header.svelte-14g7zxm h3.svelte-14g7zxm{font-size:0.875rem;color:var(--color-gray-2)}.subheading.svelte-14g7zxm.svelte-14g7zxm{font-weight:700;font-size:0.75rem}form.svelte-14g7zxm.svelte-14g7zxm{display:grid;gap:0.25rem;flex:1}form.svelte-14g7zxm div.svelte-14g7zxm{display:flex;gap:0.5rem;font-size:0.75rem}form.svelte-14g7zxm div .input-group.svelte-14g7zxm{flex:1;border-radius:4px;border:1px solid #eee;color:var(--color-gray-2)}form.svelte-14g7zxm div input.svelte-14g7zxm{flex:1;padding:0.25rem 0.5rem;border-right:1px solid var(--color-gray-8);background:transparent}form.svelte-14g7zxm div select.svelte-14g7zxm{background:transparent}form.svelte-14g7zxm div button.svelte-14g7zxm{padding:10px 12px;background:var(--color-gray-7);border-radius:4px}form.svelte-14g7zxm div button.svelte-14g7zxm:disabled{opacity:0.5}ul.svelte-14g7zxm.svelte-14g7zxm{margin-top:0.5rem;display:grid;gap:0.75rem}li.svelte-14g7zxm.svelte-14g7zxm{display:flex;align-items:center;gap:0.5rem;font-weight:400;font-size:0.75rem}li.svelte-14g7zxm .letter.svelte-14g7zxm{height:26px;width:26px;display:flex;align-items:center;justify-content:center;background:#81a6fd;color:white;font-weight:700;font-size:0.875rem;line-height:0;border-radius:50%}li.svelte-14g7zxm .email.svelte-14g7zxm{flex:1}",
  map: null
};
const ServerInvitation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const { supabase } = $page.data;
  let email = "";
  let editors = [];
  let invitations = [];
  get_collaborators().then((res) => {
    editors = res;
  });
  get_invitations().then((res) => {
    invitations = res;
  });
  async function get_invitations() {
    const { data, error } = await supabase.from("invitations").select("*").eq("server_invitation", true);
    return data || [];
  }
  async function get_collaborators() {
    const { data, error } = await supabase.from("server_members").select("*, user(*)");
    if (error) {
      console.error(error);
      return [];
    } else
      return data;
  }
  const Role = (role) => ({
    DEV: "Developer",
    EDITOR: "Content Editor"
  })[role];
  if ($$props.get_collaborators === undefined && $$bindings.get_collaborators && get_collaborators !== undefined)
    $$bindings.get_collaborators(get_collaborators);
  $$result.css.add(css$3);
  $$unsubscribe_page();
  return `<div class="Invitation svelte-14g7zxm"><main class="svelte-14g7zxm"><header class="svelte-14g7zxm"><h2 class="svelte-14g7zxm">Invite Server Member</h2>
      <h3 class="svelte-14g7zxm">Server members have access to all the sites on this server and can
        create new sites.
      </h3></header>
    <form class="svelte-14g7zxm"><label class="subheading svelte-14g7zxm" for="email">Enter collaborator email</label>
      <div class="svelte-14g7zxm"><div class="input-group svelte-14g7zxm"><input type="text" placeholder="Email address" name="email" class="svelte-14g7zxm"${add_attribute("value", email, 0)}>
          <select class="svelte-14g7zxm"><option value="DEV">${escape(Role("DEV"))}</option><option value="EDITOR">${escape(Role("EDITOR"))}</option></select></div>
        <button type="submit" ${"disabled"} class="svelte-14g7zxm">${`<span>Send invite</span>`}</button></div></form>
    ${invitations.length > 0 ? `<section><h3 class="subheading svelte-14g7zxm">Invitations</h3>
        <ul class="svelte-14g7zxm">${each(invitations.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)), ({ email: email2, created_at }) => {
    return `<li class="svelte-14g7zxm"><span class="letter svelte-14g7zxm">${escape(email2[0])}</span>
              <span class="email svelte-14g7zxm">${escape(email2)}</span>
              <span>Sent ${escape(timeago.format(created_at))}</span>
            </li>`;
  })}</ul></section>` : ``}
    <section><h3 class="subheading svelte-14g7zxm">People with Access</h3>
      <ul class="svelte-14g7zxm">${each(editors, ({ user, role }) => {
    return `<li class="svelte-14g7zxm"><span class="letter svelte-14g7zxm">${escape(user.email[0])}</span>
            <span class="email svelte-14g7zxm">${escape(user.email)}</span>
            <span class="role">${escape(Role(role))}</span>
          </li>`;
  })}</ul></section></main>
</div>`;
});
const css$2 = {
  code: ".Invitation.svelte-1avvkd8.svelte-1avvkd8{--Modal-align-items:center;padding:1rem 1.5rem;color:var(--color-gray-1)}main.svelte-1avvkd8.svelte-1avvkd8{display:grid;gap:1.5rem}h2.svelte-1avvkd8.svelte-1avvkd8{font-weight:700;font-size:1rem}.subheading.svelte-1avvkd8.svelte-1avvkd8{font-weight:700;font-size:0.75rem;margin-bottom:0.5rem}form.svelte-1avvkd8.svelte-1avvkd8{display:grid;gap:0.25rem}form.svelte-1avvkd8 div.svelte-1avvkd8{display:flex;gap:0.5rem;font-size:0.75rem}form.svelte-1avvkd8 div .input-group.svelte-1avvkd8{border-radius:4px;border:1px solid #eee;color:var(--color-gray-2)}form.svelte-1avvkd8 div input.svelte-1avvkd8{flex:1;padding:0.25rem 0.5rem;border-right:1px solid var(--color-gray-8);background:transparent}form.svelte-1avvkd8 div select.svelte-1avvkd8{background:transparent}form.svelte-1avvkd8 div button.svelte-1avvkd8{padding:10px 12px;background:var(--color-gray-7);border-radius:4px}ul.svelte-1avvkd8.svelte-1avvkd8{margin-top:0.5rem;display:grid;gap:0.75rem}li.svelte-1avvkd8.svelte-1avvkd8{display:flex;align-items:center;gap:0.5rem;font-weight:400;font-size:0.75rem}li.svelte-1avvkd8 .letter.svelte-1avvkd8{height:26px;width:26px;display:flex;align-items:center;justify-content:center;background:#81a6fd;color:white;font-weight:700;font-size:0.875rem;line-height:0;border-radius:50%}li.svelte-1avvkd8 .email.svelte-1avvkd8{flex:1}",
  map: null
};
const SiteInvitation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { site } = $$props;
  const { supabase, session } = $page.data;
  const owner = session?.user;
  let email = "";
  let editors = [];
  get_collaborators(site.id).then((res) => {
    editors = res;
  });
  let invitations = [];
  get_invitations(site.id).then((res) => {
    invitations = res;
  });
  async function get_invitations(site_id) {
    const { data, error } = await supabase.from("invitations").select("*").eq("site", site_id);
    return data || [];
  }
  async function get_collaborators(site_id) {
    const { data, error } = await supabase.from("collaborators").select(`user (*)`).filter("site", "eq", site_id);
    if (error) {
      console.error(error);
      return [];
    } else
      return data.map((item) => item.user);
  }
  if ($$props.site === undefined && $$bindings.site && site !== undefined)
    $$bindings.site(site);
  if ($$props.get_collaborators === undefined && $$bindings.get_collaborators && get_collaborators !== undefined)
    $$bindings.get_collaborators(get_collaborators);
  $$result.css.add(css$2);
  $$unsubscribe_page();
  return `<div class="Invitation svelte-1avvkd8"><main class="svelte-1avvkd8"><h2 class="svelte-1avvkd8">Invite site collaborator</h2>
    <form class="svelte-1avvkd8"><label class="subheading svelte-1avvkd8" for="email">Enter collaborator email</label>
      <div class="svelte-1avvkd8"><div class="input-group svelte-1avvkd8"><input type="text" placeholder="Email address" name="email" class="svelte-1avvkd8"${add_attribute("value", email, 0)}>
          <select class="svelte-1avvkd8"><option value="DEV">Developer</option><option value="EDITOR">Content Editor</option></select></div>
        <button type="submit" class="svelte-1avvkd8">Send invite</button></div></form>
    ${invitations.length > 0 ? `<section><h3 class="subheading svelte-1avvkd8">Invitations</h3>
        <ul class="svelte-1avvkd8">${each(invitations.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)), ({ email: email2, created_at }) => {
    return `<li class="svelte-1avvkd8"><span class="letter svelte-1avvkd8">${escape(email2[0])}</span>
              <span class="email svelte-1avvkd8">${escape(email2)}</span>
              <span>Sent ${escape(timeago.format(created_at))}</span>
            </li>`;
  })}</ul></section>` : ``}
    <section><h3 class="subheading svelte-1avvkd8">People with Access</h3>
      <ul class="svelte-1avvkd8"><li class="svelte-1avvkd8"><span class="letter svelte-1avvkd8">${escape(owner.email[0])}</span>
          <span class="email svelte-1avvkd8">${escape(owner.email)}</span>
          <span class="role">Owner</span></li>
        ${each(editors, ({ email: email2 }) => {
    return `<li class="svelte-1avvkd8"><span class="letter svelte-1avvkd8">${escape(email2[0])}</span>
            <span class="email svelte-1avvkd8">${escape(email2)}</span>
            <span class="role">Editor</span>
          </li>`;
  })}</ul></section></main>
</div>`;
});
const css = {
  code: ".modal.svelte-1jb5www{display:flex;flex-direction:column;align-items:center;justify-content:center;overflow:hidden;position:fixed;z-index:9999999999;inset:0}.modal-background.svelte-1jb5www{inset:0;position:absolute;background:var(--primo-color-black);opacity:0.95;cursor:pointer;transition:opacity 0.1s}.modal-background.svelte-1jb5www:hover{opacity:0.9}.modal-background.disabled.svelte-1jb5www{cursor:default}.modal-background.disabled.svelte-1jb5www:hover{opacity:0.95}.modal-card.svelte-1jb5www{display:flex;flex-direction:column;align-items:center;margin:0 auto;position:relative;border-radius:var(--primo-border-radius);max-height:calc(100vh - 2rem);background:var(--color-gray-9)}.modal-card-body.svelte-1jb5www{flex:1;overflow-y:auto}",
  map: null
};
const defaultValue = {
  id: null,
  props: {},
  options: { disableClose: false }
};
const type = writable(defaultValue);
const visible = writable(false);
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $visible, $$unsubscribe_visible;
  let $type, $$unsubscribe_type;
  $$unsubscribe_visible = subscribe(visible, (value) => $visible = value);
  $$unsubscribe_type = subscribe(type, (value) => $type = value);
  const modals = {
    CREATE_SITE: CreateSite,
    DELETE_SITE: DeleteSite,
    INVITE_COLLABORATORS: ServerInvitation,
    INVITE_SITE_COLLABORATOR: SiteInvitation
  };
  let activeModal = modals[$type.id];
  async function showModal(typeID) {
    activeModal = modals[typeID];
  }
  $$result.css.add(css);
  {
    showModal($type.id);
  }
  $$unsubscribe_visible();
  $$unsubscribe_type();
  return `${$visible ? `<div class="modal mousetrap primo-reset svelte-1jb5www">
    <div class="${[
    "modal-background svelte-1jb5www",
    $type.options?.disableClose ? "disabled" : ""
  ].join(" ").trim()}"></div>
    <div class="modal-card svelte-1jb5www"><div class="modal-card-body svelte-1jb5www">${validate_component(activeModal || missing_component, "svelte:component").$$render($$result, Object.assign({}, $type.props), {}, {})}</div></div></div>` : ``}`;
});
const css$1 = {
  code: `@import url(https://fonts.bunny.net/css?family=inter:300,400,500,600,700,800);.primo-reset *,.primo-reset ::before,.primo-reset ::after{box-sizing:border-box}.primo-reset html{-moz-tab-size:4;-o-tab-size:4;tab-size:4}.primo-reset html{line-height:1.15;-webkit-text-size-adjust:100%}.primo-reset body{margin:0}.primo-reset body{font-family:system-ui,
		-apple-system, /* Firefox supports this but not yet \`system-ui\` */
		'Segoe UI',
		Roboto,
		Helvetica,
		Arial,
		sans-serif,
		'Apple Color Emoji',
		'Segoe UI Emoji'}.primo-reset hr{height:0;color:inherit}.primo-reset abbr[title]{-webkit-text-decoration:underline dotted;text-decoration:underline dotted}.primo-reset b,.primo-reset strong{font-weight:bolder}.primo-reset code,.primo-reset kbd,.primo-reset samp,.primo-reset pre{font-family:ui-monospace,
		SFMono-Regular,
		Consolas,
		'Liberation Mono',
		Menlo,
		monospace;font-size:1em}.primo-reset small{font-size:80%}.primo-reset sub,.primo-reset sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}.primo-reset sub{bottom:-0.25em}.primo-reset sup{top:-0.5em}.primo-reset table{text-indent:0;border-color:inherit}.primo-reset button,.primo-reset input,.primo-reset optgroup,.primo-reset select,.primo-reset textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}.primo-reset button,.primo-reset select{text-transform:none}.primo-reset button,.primo-reset [type='button'],.primo-reset [type='reset'],.primo-reset [type='submit']{-webkit-appearance:button}.primo-reset ::-moz-focus-inner{border-style:none;padding:0}.primo-reset :-moz-focusring{outline:1px dotted ButtonText}.primo-reset :-moz-ui-invalid{box-shadow:none}.primo-reset legend{padding:0}.primo-reset progress{vertical-align:baseline}.primo-reset ::-webkit-inner-spin-button,.primo-reset ::-webkit-outer-spin-button{height:auto}.primo-reset [type='search']{-webkit-appearance:textfield;outline-offset:-2px}.primo-reset ::-webkit-search-decoration{-webkit-appearance:none}.primo-reset ::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}.primo-reset summary{display:list-item}.primo-reset blockquote,.primo-reset dl,.primo-reset dd,.primo-reset h1,.primo-reset h2,.primo-reset h3,.primo-reset h4,.primo-reset h5,.primo-reset h6,.primo-reset hr,.primo-reset figure,.primo-reset p,.primo-reset pre{margin:0}.primo-reset button{background-color:transparent;background-image:none}.primo-reset fieldset{margin:0;padding:0}.primo-reset ol,.primo-reset ul{list-style:none;margin:0;padding:0}.primo-reset html{font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";line-height:1.5}.primo-reset body{font-family:inherit;line-height:inherit}.primo-reset *,.primo-reset ::before,.primo-reset ::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:currentColor}.primo-reset hr{border-top-width:1px}.primo-reset img{border-style:solid}.primo-reset textarea{resize:vertical}.primo-reset input::-moz-placeholder,.primo-reset textarea::-moz-placeholder{opacity:1;color:#9ca3af}.primo-reset input::placeholder,.primo-reset textarea::placeholder{opacity:1;color:#9ca3af}.primo-reset button,.primo-reset [role="button"]{cursor:pointer}.primo-reset :-moz-focusring{outline:auto}.primo-reset table{border-collapse:collapse}.primo-reset h1,.primo-reset h2,.primo-reset h3,.primo-reset h4,.primo-reset h5,.primo-reset h6{font-size:inherit;font-weight:inherit}.primo-reset a{color:inherit;text-decoration:inherit}.primo-reset button,.primo-reset input,.primo-reset optgroup,.primo-reset select,.primo-reset textarea{padding:0;line-height:inherit;color:inherit}.primo-reset pre,.primo-reset code,.primo-reset kbd,.primo-reset samp{font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace}.primo-reset img,.primo-reset svg,.primo-reset video,.primo-reset canvas,.primo-reset audio,.primo-reset iframe,.primo-reset embed,.primo-reset object{display:block;vertical-align:middle}.primo-reset img,.primo-reset video{max-width:100%;height:auto}.primo-reset [hidden]{display:none}.primo-reset *,.primo-reset ::before,.primo-reset ::after{--tw-border-opacity:1;border-color:rgba(229, 231, 235, var(--tw-border-opacity))}.primo-reset{font-family:'Inter', serif !important;direction:ltr;--primo-color-brand:#35d994;--primo-color-brand-dark:#097548;--primo-color-white:white;--primo-color-codeblack:rgb(30, 30, 30);--primo-color-codeblack-opaque:rgba(30, 30, 30, 0.9);--primo-color-black:rgb(17, 17, 17);--primo-color-black-opaque:rgba(17, 17, 17, 0.95);--color-gray-1:rgb(245, 245, 245);--color-gray-2:rgb(229, 229, 229);--color-gray-3:rgb(212, 212, 212);--color-gray-4:rgb(156, 163, 175);--color-gray-5:rgb(115, 115, 115);--color-gray-6:rgb(82, 82, 82);--color-gray-7:rgb(64, 64, 64);--color-gray-8:rgb(38, 38, 38);--color-gray-9:rgb(23, 23, 23);--font-size-1:0.75rem;--font-size-2:0.875rem;--font-size-3:1.125rem;--font-size-4:1.25rem;--box-shadow-xl:0 0 #0000, 0 0 #0000, 0 20px 25px -5px rgba(0, 0, 0, 0.1),
			0 10px 10px -5px rgba(0, 0, 0, 0.04);--transition-colors:background-color 0.1s, border-color 0.1s, color 0.1s, fill 0.1s,
			stroke 0.1s;--padding-container:15px;--max-width-container:1900px;--ring:0px 0px 0px 2px var(--primo-color-brand);--primo-max-width-1:30rem;--primo-max-width-2:1200px;--primo-max-width-max:1200px;--primo-border-radius:5px;--primo-ring-brand:0px 0px 0px 1px var(--primo-color-brand);--primo-ring-brand-thin:0px 0px 0px 1px var(--primo-color-brand);--primo-ring-brand-thick:0px 0px 0px 3px var(--primo-color-brand)}button,a{cursor:pointer}body{margin:0}.primo-input{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;background-color:transparent;font-size:inherit;background:var(--color-white);padding:0.5rem 0.75rem;width:100%}.primo-modal{color:var(--color-gray-1);padding:1.5rem;border-radius:var(--primo-border-radius);margin:0 auto}.primo-heading-xl{margin-bottom:0.5rem;font-size:1.25rem;line-height:1.75rem;font-weight:700}.primo-heading-lg{margin-bottom:0.25rem;font-size:1.1rem;line-height:1.5rem;font-weight:700}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}`,
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { supabase, session } = data;
  loadIcons([
    "gg:spinner",
    "material-symbols:edit-square-outline-rounded",
    "pepicons-pop:trash",
    "gridicons:external"
  ]);
  enableCache("local");
  if ($$props.data === undefined && $$bindings.data && data !== undefined)
    $$bindings.data(data);
  $$result.css.add(css$1);
  ({ supabase, session } = data);
  session && supabase_client.auth.setSession({
    access_token: session.access_token,
    refresh_token: session.refresh_token
  });
  return `${validate_component(Modal, "Modal").$$render($$result, {}, {}, {})}
${slots.default ? slots.default({}) : ``}`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-DsEOzWcW.js.map
