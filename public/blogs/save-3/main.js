import { loadProducts, renderProducts, setupFilters } from './gallery.js';
import { setupModal, openModal } from './modal.js';

// Initialize gallery with dynamic blog loading
async function initGallery() {
  const blogs = await loadProducts(); // still using loadProducts() from gallery.js

  renderProducts(blogs);
  setupFilters(blogs);
  setupModal();

  console.log("InitGallery called with:", blogs);

  // Handle click events for modal opening
  document.getElementById('gallery').addEventListener('click', (e) => {
    console.log("Gallery clicked:", e.target);

    const card = e.target.closest('.blog-card');
    console.log("Closest .blog-card:", card);

    if (card && card.dataset.id) {
      const blogId = parseInt(card.dataset.id);
      const blog = blogs.find(b => b.id === blogId);

      if (blog) openModal(blog);
    } else {
      console.log("No valid card or data-id found");
    }
  });
}

document.addEventListener('DOMContentLoaded', initGallery);
