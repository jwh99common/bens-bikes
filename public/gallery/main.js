import { loadProducts, renderProducts, setupFilters } from './gallery.js';

// Initialize gallery with dynamic product loading
async function initGallery() {
  const products = await loadProducts();

  renderProducts(products);

  
  console.log("InitGallery called with:", products);

}

document.addEventListener('DOMContentLoaded', initGallery);
