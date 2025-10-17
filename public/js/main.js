import { loadGallery, renderGallery, setupFilters } from './gallery.js';
import { setupModal, openModal } from './modal.js';
import { addToCart, updateCartCount, renderCartPanel } from './cart.js';

document.addEventListener('DOMContentLoaded', async () => {
  const type = document.body.dataset.type || 'products'; // e.g. 'product', 'service', 'bundle'
  const items = await loadGallery(`${type}`); // calls /api/products, /api/services, etc.

  renderGallery(items, type);
  setupFilters(items, type);
  setupModal();
  setupCart();
  setupAddToCart(items);
  setupModalTriggers(items);
});

function setupCart() {
  updateCartCount();
  renderCartPanel();
  const toggleBtn = document.getElementById('cartToggleBtn');
  const cartPanel = document.getElementById('cartPanel');
  if (toggleBtn && cartPanel) {
    toggleBtn.addEventListener('click', () => {
      cartPanel.classList.toggle('hidden');
      renderCartPanel();
    });
  }
}

function setupAddToCart(items) {
  document.querySelectorAll('.add-to-cart').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const item = {
        id: parseInt(btn.dataset.id),
        title: btn.dataset.title,
        price: parseFloat(btn.dataset.price),
        image: btn.dataset.image,
        type: btn.dataset.type
      };
      addToCart(item);
      updateCartCount();
      renderCartPanel();
    });
  });
}

function setupModalTriggers(items) {
  document.getElementById('gallery').addEventListener('click', (e) => {
    if (e.target.classList.contains('add-to-cart')) return;
    const card = e.target.closest('.product-card');
    if (card && card.dataset.id) {
      const id = parseInt(card.dataset.id);
      const item = items.find(i => i.id === id);
      if (item) openModal(item);
    }
  });
}
