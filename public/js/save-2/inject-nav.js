fetch('/bb-nav.html')
  .then(res => res.text())
  .then(html => {
    document.querySelector('#nav-placeholder').innerHTML = html;
  });
