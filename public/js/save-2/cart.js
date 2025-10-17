const CART_KEY = 'bensBikesCart';

function getCart() {
  return JSON.parse(localStorage.getItem(CART_KEY)) || [];
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function addToCart(product) {
  const cart = getCart();
  const existing = cart.find(item => item.id === product.id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  saveCart(cart);
}

function removeFromCart(id) {
  const cart = getCart().filter(item => item.id !== id);
  saveCart(cart);
}

function clearCart() {
  localStorage.removeItem(CART_KEY);
}

function getCartCount() {
  return getCart().reduce((sum, item) => sum + item.quantity, 0);
}

function updateCartCount(countId = 'cartCount') {
  const countEl = document.getElementById(countId);
  if (countEl) countEl.textContent = getCartCount();
}

function renderCartPanel(containerId = 'cartItems') {
  const cart = getCart();
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = cart.map(item => `
    <li>
      ${item.title} × ${item.quantity}
      <button data-id="${item.id}" class="remove-item">✖</button>
    </li>
  `).join('');

  container.querySelectorAll('.remove-item').forEach(btn => {
    btn.addEventListener('click', () => {
      removeFromCart(btn.dataset.id);
      renderCartPanel(containerId);
      updateCartCount();
    });
  });
}

export {
  getCart,
  saveCart,
  addToCart,
  removeFromCart,
  clearCart,
  getCartCount,
  updateCartCount,
  renderCartPanel
};
