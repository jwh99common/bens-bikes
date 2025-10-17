import { loadProducts, renderProducts, setupFilters } from './gallery.js';
import { setupModal, openModal } from './modal.js';

const CART_KEY = 'bensBikesCart';

function getCart() {
  return JSON.parse(localStorage.getItem(CART_KEY)) || [];
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function addToCart(item) {
  const cart = getCart();
  const existing = cart.find(c => c.id === item.id && c.type === item.type);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      id: item.id,
      type: item.type,
      title: item.title,
      price: item.price,
      image: item.image,
      quantity: 1
    });
  }
  saveCart(cart);
  console.log(`🛒 Added to cart: ${item.type} #${item.id}`);
  updateCartUI();
}

function updateCartUI() {
  const cart = getCart();
  const cartItems = document.getElementById('cartItems');
  const cartCount = document.getElementById('cartCount');
  if (!cartItems || !cartCount) return;

  cartItems.innerHTML = '';
  cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);

  cart.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.title}" class="cart-thumb" />
        <div class="cart-details">
          <strong>${item.title}</strong><br>
          £${item.price} × ${item.quantity} = <strong>£${item.price * item.quantity}</strong><br>
          <em>${item.type}</em><br>
          <button class="remove-btn" data-id="${item.id}" data-type="${item.type}">Remove</button>
        </div>
      </div>
    `;
    cartItems.appendChild(li);
  });

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalDiv = document.createElement('div');
  totalDiv.className = 'cart-total';
  totalDiv.innerHTML = `<strong>Total:</strong> £${total.toFixed(2)}`;
  cartItems.appendChild(totalDiv);

  document.querySelectorAll('.remove-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.dataset.id);
      const type = btn.dataset.type;
      const cart = getCart();
      const index = cart.findIndex(i => i.id === id && i.type === type);
      if (index !== -1) {
        cart.splice(index, 1);
        saveCart(cart);
        updateCartUI();
      }
    });
  });
}

function setupCartListeners(products) {
  document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (e) => {
      e.stopPropagation(); // prevent modal trigger
      const id = parseInt(button.dataset.id);
      const product = products.find(p => p.id === id);
      if (product) {
        addToCart({
          id: product.id,
          type: 'product',
          title: product.title,
          price: product.price,
          image: product.image
        });
      }
    });
  });
}

function setupCartToggle() {
  const cartPanel = document.getElementById('cartPanel');
  const cartToggleBtn = document.getElementById('cartToggleBtn');
  if (!cartPanel || !cartToggleBtn) return;

  cartToggleBtn.addEventListener('click', () => {
    cartPanel.classList.toggle('hidden');
    updateCartUI(); // refresh contents
  });
}

async function initGallery() {
  const products = await loadProducts();

  renderProducts(products);
  setupFilters(products);
  setupCartListeners(products);
  setupCartToggle();
  setupModal();
  updateCartUI(); // load cart on page load

  console.log("InitGallery called with:", products);

  document.getElementById('gallery').addEventListener('click', (e) => {
    if (e.target.classList.contains('add-to-cart')) return;

    const card = e.target.closest('.product-card');
    if (card && card.dataset.id) {
      const productId = parseInt(card.dataset.id);
      const product = products.find(p => p.id === productId);
      if (product) openModal(product);
    }
  });
}

document.addEventListener('DOMContentLoaded', initGallery);
