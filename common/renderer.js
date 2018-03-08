const Renderer = async ({ originalUrl }, isBrowser) => {
  const message = isBrowser ? 'In da browser 😎' : 'Node.js all the way 💻';
  return fetch(`https://randomuser.me/api/?seed=${originalUrl}`)
    .then(res => res.json())
    .then(data => {
      return `
        <h1>${originalUrl}</h1>
        <h2>${message}</h2>
        <pre>${JSON.stringify(data.results[0].login, null, 4)}</pre>
      `;
    });
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
