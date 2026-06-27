
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
    'index.csr.html': {size: 709, hash: 'f48c10be74fc975c9505ae56ca4d4caccff61c451db02fd0e6272381b4a4fe27', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 950, hash: '6ba6b79af84c1668eb77bbfec2047dd867981cb1774e5e9643dde311f573102f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 3592, hash: '937a6202eb3ba0d2f15fd957b915df68b8e6598ebc1465987370eca2cb8ade5a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-IM4DWE66.css': {size: 420, hash: 'oQ/8oX6SECg', text: () => import('./assets-chunks/styles-IM4DWE66_css.mjs').then(m => m.default)}
  },
};
