import { c as create_ssr_component, a as subscribe, k as set_store_value, v as validate_component } from './index3-UOcDFV3P.js';
import { B as locked_blocks } from './FileSaver.min-DRdcPaqH.js';
import './Icon-Dg-p2Y8u.js';
import 'axios';
import { P as Page$1 } from './Page-VH9T-lso.js';
import { customAlphabet } from 'nanoid/non-secure';
import 'lodash-es';
import './index2-B3uZdIkT.js';
import 'timeago.js';
import './_commonjsHelpers-BFTU3MAI.js';
import 'crypto';

function createUniqueID(length = 5) {
  const nanoid = customAlphabet("abcdefghijklmnopqrstuvwxyz", length);
  return nanoid();
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $locked_blocks, $$unsubscribe_locked_blocks;
  $$unsubscribe_locked_blocks = subscribe(locked_blocks, (value) => $locked_blocks = value);
  let { data } = $$props;
  const { supabase } = data;
  const presence_key = createUniqueID();
  const channel = supabase.channel(`locked-blocks`, {
    config: { presence: { key: presence_key } }
  });
  channel.subscribe(async (status) => {
    if (status === "SUBSCRIBED") {
      channel.track({ active_block: null });
    }
  });
  channel.on("presence", { event: "sync" }, () => {
    const state = channel.presenceState();
    set_store_value(
      locked_blocks,
      $locked_blocks = Object.entries(state).map(([key, value]) => ({
        key,
        block_id: value[0]["active_block"],
        user: value[0]["user"]
      })).filter((block) => block.key !== presence_key),
      $locked_blocks
    );
  });
  if ($$props.data === undefined && $$bindings.data && data !== undefined)
    $$bindings.data(data);
  $$unsubscribe_locked_blocks();
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
//# sourceMappingURL=_page.svelte-q3Yam5v2.js.map
