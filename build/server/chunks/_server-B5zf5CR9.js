import { j as json } from './index-Q4WdoeBP.js';
import { p as postcss, h as html_server } from './server-postcss-D3aZNC9c.js';
import 'vm';
import 'memfs';
import 'lodash-es';
import 'node:path';
import 'path';
import 'node:process';
import 'node:perf_hooks';
import 'node:crypto';
import 'node:fs/promises';
import 'tty';
import 'resolve.exports';
import 'estree-walker';
import './_commonjsHelpers-BFTU3MAI.js';
import 'url';
import 'nanoid/non-secure';
import 'fs';
import './node-C2KYhD1y.js';
import 'util';

const POST = async (event) => {
  const { id, code, content } = await event.request.json();
  const css = await postcss(code.css || "");
  let res = {};
  try {
    res = await html_server({
      component: {
        id,
        data: content.en,
        html: code.html,
        css,
        js: code.js
      }
    });
  } catch (e) {
    console.log(e.message);
  }
  return json(res);
};

export { POST };
//# sourceMappingURL=_server-B5zf5CR9.js.map
