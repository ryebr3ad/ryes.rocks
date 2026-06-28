
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
    'index.csr.html': {size: 709, hash: '51e1fdbb3acac600bceadd9218a668a96abe00e927cfe7729e890483e9b9460b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 950, hash: 'cd93b9914ccdb3d99d1b8311e5dc36f0cef97d1953a4b156e774b066a9f876bd', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 3592, hash: 'febe9c5f85c90799dfc6c3e63a32e77e2a2aca785ea55c4b9f2ae9720b16b225', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-IM4DWE66.css': {size: 420, hash: 'oQ/8oX6SECg', text: () => import('./assets-chunks/styles-IM4DWE66_css.mjs').then(m => m.default)}
  },
};
