
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
    'index.csr.html': {size: 709, hash: '13db1c3b6d4f5d61701d79701df6b70e69fe8f47111a6c54e045035f17633634', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 950, hash: '7b05a414bf9f5e24356afdf83f942a99de8a3d29d9b6fb4967cd93df55d4a4f4', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 3547, hash: 'f0f8ac121563e3e754ab7fd75864b097be417fe9a372909e1ff2ed3e7c3e234c', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-LE25ZFC7.css': {size: 372, hash: 'drZ/bq0EUak', text: () => import('./assets-chunks/styles-LE25ZFC7_css.mjs').then(m => m.default)}
  },
};
