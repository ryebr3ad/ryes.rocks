
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
    'index.csr.html': {size: 709, hash: '6b03fa6434a13ae7192beaf64ee3a7f39189e80191fb00ad3f1966918b15a639', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 950, hash: '765aa2a1e8062133949a587d3947ce2a5e8cbc1a1022a3209dfe89219bc37671', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 3592, hash: '88b0065c2be910dff0d5b63d3205805a3a3b8a7557e066573f58289714ed88b2', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-IM4DWE66.css': {size: 420, hash: 'oQ/8oX6SECg', text: () => import('./assets-chunks/styles-IM4DWE66_css.mjs').then(m => m.default)}
  },
};
