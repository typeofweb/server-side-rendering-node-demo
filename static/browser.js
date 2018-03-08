const defaultState = {originalUrl: ''};

document.body.addEventListener('click', e => {
  if (e.target.tagName.toLowerCase() === 'a') {
    e.preventDefault();
    const { href, pathname: originalUrl } = e.target;

    const state = { originalUrl };
    history.pushState(state, null, href);
    updateView(state);
  }
  return true;
}, false);

window.addEventListener('popstate', e => updateView(e.state || defaultState));

function updateView({ originalUrl }) {
  const view = window.returnExports.Renderer({ originalUrl }, true);
  document.querySelector('#view').innerHTML = view;
}
