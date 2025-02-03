import { g as getDefaultExportFromCjs } from './_commonjsHelpers-BFTU3MAI.js';
import { r as requireShowdown } from './showdown-QQPDWKBS.js';

function _mergeNamespaces(n, m) {
	m.forEach(function (e) {
		e && typeof e !== 'string' && !Array.isArray(e) && Object.keys(e).forEach(function (k) {
			if (k !== 'default' && !(k in n)) {
				var d = Object.getOwnPropertyDescriptor(e, k);
				Object.defineProperty(n, k, d.get ? d : {
					enumerable: true,
					get: function () { return e[k]; }
				});
			}
		});
	});
	return Object.freeze(n);
}

var showdownExports = requireShowdown();
var showdown = /*@__PURE__*/getDefaultExportFromCjs(showdownExports);

var showdown$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: showdown
}, [showdownExports]);

export { showdown$1 as s };
//# sourceMappingURL=showdown-Djfm7Pq8.js.map
