
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 709, hash: 'baee5bbe2425b89e4235898c2fdd8fa77abac73d8692580d38e6a31f5adfa295', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 950, hash: '2c3f7b9923ecd2180d734835aec413ba63e27e9c60d2f318de0b6b3a5391515f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 3547, hash: '1814a527e86f0796172aea2827073b35afc0f5caf89f6c6f3db0e07b224c45a5', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-IM4DWE66.css': {size: 372, hash: 'drZ/bq0EUak', text: () => import('./assets-chunks/styles-IM4DWE66_css.mjs').then(m => m.default)}
  },
};
