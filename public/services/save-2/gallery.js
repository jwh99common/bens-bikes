let currentCategory = 'all';

/**
 * Loads product data from the API.
 * Returns an array of product objects or logs an error if fetch fails.
 */
async function loadProducts() {
  try {
    const response = await fetch('/api/services', {
      headers: { 'Content-Type': 'application/json' },
      cache: 'no-store'
    });

    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const products = await response.json();
    if (!Array.isArray(products)) throw new Error('Invalid product format: expected an array');

    return products;
  } catch (error) {
    console.error('❌ Failed to load products from D1:', error);
    return [];
  }
}

/**
 * Renders product cards based on current category filter.
 * Cards include modal trigger and cart button.
 */
function renderProducts(productList) {
  const gallery = document.getElementById('gallery');
  const filteredProducts = currentCategory === 'all'
    ? productList
    : productList.filter(p => p.category === currentCategory);

  gallery.innerHTML = filteredProducts.map(product => `
    <div class="product-card" data-id="${product.id}">
      <img class="product-image" src="${product.image}" alt="${product.title}">
      <div class="product-info">
        <h3 class="product-title">${product.title}</h3>
        <p class="product-description">${product.description}</p>
        <div class="product-details">
          <span class="product-price">Starting from: £${product.price}</span>
          <!--<span class="product-category">${product.category}</span>-->
        </div>
        <button class="contact-us-btn" data-id="${product.id}">Contact Us</button>
      </div>
    </div>
  `).join('');

  console.log("Rendering products:", filteredProducts);
}

/**
 * Sets up category filter buttons.
 * Re-renders products on filter change.
 */
function setupFilters(productList) {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      currentCategory = e.target.dataset.category;
      renderProducts(productList);
    });
  });
}

function setupContactButtons() {
  document.querySelectorAll('.contact-us-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      window.location.href = '/misc/contact.html';
    });
  });
}

/**
 * Utility to get a product by ID.
 */
function getProductById(id, productList) {
  return productList.find(p => p.id === id);
}

export {
  loadProducts,
  renderProducts,
  setupFilters,
  getProductById,
  setupContactButtons
};
