
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
    'index.csr.html': {size: 709, hash: '50c07bbf4ab291a8dbfd750f5e7d9b5763eca935a62c41723ad22e2603c4a1cb', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 950, hash: 'afab8add804fec2d53a517ec8e116d474ad71ad26b75d874cadee88a7987a921', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 3592, hash: '952addf85332f8157bf075150e53c3dda35f64d7979b0ef632598ea7a84fa4ba', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-IM4DWE66.css': {size: 420, hash: 'oQ/8oX6SECg', text: () => import('./assets-chunks/styles-IM4DWE66_css.mjs').then(m => m.default)}
  },
};
