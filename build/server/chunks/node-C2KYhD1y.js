import require$$2 from 'util';

var node;
var hasRequiredNode;

function requireNode () {
	if (hasRequiredNode) return node;
	hasRequiredNode = 1;
	/**
	 * For Node.js, simply re-export the core `util.deprecate` function.
	 */

	node = require$$2.deprecate;
	return node;
}

export { requireNode as r };
//# sourceMappingURL=node-C2KYhD1y.js.map
