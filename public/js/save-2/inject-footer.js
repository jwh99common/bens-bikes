async function injectFooter() {
  const res = await fetch('/bb-footer.html');
  const html = await res.text();
  const container = document.createElement('div');
  container.innerHTML = html;
  document.body.appendChild(container);
}

document.addEventListener('DOMContentLoaded', injectFooter);
