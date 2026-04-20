const baseUrl = (() => {
  const rawBase = import.meta.env?.BASE_URL ?? '/';
  return rawBase.endsWith('/') ? rawBase : `${rawBase}/`;
})();

export function asset(fileName) {
  return `${baseUrl}assets/${fileName}`;
}

export function applyAssetCssVars(root = document.documentElement) {
  const assetVars = {
    '--asset-bg-tech-hero-light': `url("${asset('bg-tech-hero-light.svg')}")`,
    '--asset-pexels-network-lines': `url("${asset('pexels-network-lines.jpg')}")`,
    '--asset-pexels-blue-tunnel': `url("${asset('pexels-blue-tunnel.jpg')}")`,
    '--asset-cover-stage-backdrop': `url("${asset('cover-stage-backdrop.jpg')}")`,
    '--asset-closing-summary-backdrop': `url("${asset('closing-summary-backdrop.jpg')}")`,
    '--asset-harmony-tech-structure': `url("${asset('harmony-tech-structure.jpg')}")`
  };

  Object.entries(assetVars).forEach(([name, value]) => {
    root.style.setProperty(name, value);
  });
}
