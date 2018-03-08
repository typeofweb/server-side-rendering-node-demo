document.body.addEventListener('click', e => {
  if (e.target.tagName.toLowerCase() === 'a') {
    e.preventDefault();
    const { href, pathname } = e.target;
    history.pushState(null, null, href);
  }
}, false);
