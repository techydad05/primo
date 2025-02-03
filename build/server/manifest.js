const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","logo-light.svg","logo.svg","primologo.png"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.52bbd7d5.js","app":"_app/immutable/entry/app.0de93175.js","imports":["_app/immutable/entry/start.52bbd7d5.js","_app/immutable/chunks/index.7ce6af5d.js","_app/immutable/chunks/singletons.d2d14c82.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/entry/app.0de93175.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/index.7ce6af5d.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-W1KcdPEQ.js')),
			__memo(() => import('./chunks/1-CXD0nxEk.js')),
			__memo(() => import('./chunks/2-By6zIF5R.js')),
			__memo(() => import('./chunks/3-BI8dIzuh.js')),
			__memo(() => import('./chunks/4-BNqYrQA4.js')),
			__memo(() => import('./chunks/5-CitwEd74.js')),
			__memo(() => import('./chunks/6-d8uuc_TM.js')),
			__memo(() => import('./chunks/7-Cjf3VBK1.js')),
			__memo(() => import('./chunks/8-B41dPiYt.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/api/deploy",
				pattern: /^\/api\/deploy\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-CkWlfD7i.js'))
			},
			{
				id: "/api/deploy/blobs",
				pattern: /^\/api\/deploy\/blobs\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-xmcAE8x_.js'))
			},
			{
				id: "/api/deploy/delete",
				pattern: /^\/api\/deploy\/delete\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-zTRQhU2e.js'))
			},
			{
				id: "/api/deploy/repos",
				pattern: /^\/api\/deploy\/repos\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-6SxOW_U-.js'))
			},
			{
				id: "/api/deploy/user",
				pattern: /^\/api\/deploy\/user\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-DJYb1UNe.js'))
			},
			{
				id: "/api/invitations",
				pattern: /^\/api\/invitations\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-D1xZPjZ8.js'))
			},
			{
				id: "/api/render",
				pattern: /^\/api\/render\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-B5zf5CR9.js'))
			},
			{
				id: "/api/[site]",
				pattern: /^\/api\/([^/]+?)\/?$/,
				params: [{"name":"site","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-_T5zVia6.js'))
			},
			{
				id: "/api/[site]/[...page]",
				pattern: /^\/api\/([^/]+?)(?:\/(.*))?\/?$/,
				params: [{"name":"site","optional":false,"rest":false,"chained":false},{"name":"page","optional":false,"rest":true,"chained":true}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-BHLOgrFD.js'))
			},
			{
				id: "/auth",
				pattern: /^\/auth\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/auth/callback",
				pattern: /^\/auth\/callback\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-C3HOZcnN.js'))
			},
			{
				id: "/auth/set-password",
				pattern: /^\/auth\/set-password\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/update-notice",
				pattern: /^\/update-notice\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/[site]",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"site","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/[site]/[page].html",
				pattern: /^\/([^/]+?)\/([^/]+?)\.html\/?$/,
				params: [{"name":"site","optional":false,"rest":false,"chained":false},{"name":"page","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-BZ4Ad40q.js'))
			},
			{
				id: "/[site]/[...page]",
				pattern: /^\/([^/]+?)(?:\/(.*))?\/?$/,
				params: [{"name":"site","optional":false,"rest":false,"chained":false},{"name":"page","optional":false,"rest":true,"chained":true}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
