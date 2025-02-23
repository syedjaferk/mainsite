
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 0,
    "route": "/"
  },
  {
    "renderMode": 0,
    "route": "/table/*"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 4807, hash: 'e7fb27ed2f5fe2bece5430c602a83b23f20892fd84cedf6bdd1cac4b465e76a9', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 5209, hash: 'a60dc19cb8b5c62a1f2d1dcc3bf6603e27f9795741dd39c825b053776bdf9f65', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-KZJSYSX7.css': {size: 155, hash: 'MzXUAtu0+TE', text: () => import('./assets-chunks/styles-KZJSYSX7_css.mjs').then(m => m.default)}
  },
};
