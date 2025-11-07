async function injectHeader() {
  const res = await fetch('/partials/bb-header.html');
  const html = await res.text();
  const container = document.createElement('div');
  container.innerHTML = html;
  document.body.insertBefore(container, document.body.firstChild);
}

document.addEventListener('DOMContentLoaded', injectHeader);
