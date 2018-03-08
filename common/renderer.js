const Renderer = ({ originalUrl }, isBrowser) => {
  const message = isBrowser ? 'In da browser 😎' : 'Node.js all the way 💻';
  return `
    <h1>${originalUrl}</h1>
    <h2>${message}</h2>
  `;
};







(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.returnExports = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {
  return { Renderer };
}));
