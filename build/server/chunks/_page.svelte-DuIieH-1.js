import { c as create_ssr_component, v as validate_component } from './index3-UOcDFV3P.js';
import './FileSaver.min-DRdcPaqH.js';
import './Icon-Dg-p2Y8u.js';
import 'axios';
import { P as Page$1 } from './Page-VH9T-lso.js';
import 'lodash-es';
import './index2-B3uZdIkT.js';
import 'timeago.js';
import './_commonjsHelpers-BFTU3MAI.js';
import 'nanoid/non-secure';
import 'crypto';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === undefined && $$bindings.data && data !== undefined)
    $$bindings.data(data);
  return `${validate_component(Page$1, "PrimoPage").$$render(
    $$result,
    {
      page: { ...data.page, sections: data.sections }
    },
    {},
    {}
  )}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-DuIieH-1.js.map
