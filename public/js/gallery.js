let currentCategory = 'all';

export async function loadGallery(type = 'products') {
  try {
    const response = await fetch(`/api/${type}`, {
      headers: { 'Content-Type': 'application/json' },
      cache: 'no-store'
    });
    if (!response.ok) throw new Error(`Failed to load ${type}`);
    const items = await response.json();
    return Array.isArray(items) ? items : [];
  } catch (err) {
    console.error(`❌ Error loading ${type}:`, err);
    return [];
  }
}

export function renderGallery(items, type = 'product') {
  const gallery = document.getElementById('gallery');
  const filtered = currentCategory === 'all'
    ? items
    : items.filter(i => i.category === currentCategory);

  gallery.innerHTML = filtered.map(item => `
    <div class="product-card" data-id="${item.id}" data-type="${type}">
      <img src="${item.image}" alt="${item.title}" class="product-image" />
      <div class="product-info">
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <div class="product-details">
          <span class="product-price">£${item.price}</span>
          <span class="product-category">${item.category}</span>
        </div>
        <button class="add-to-cart"
          data-id="${item.id}"
          data-title="${item.title}"
          data-price="${item.price}"
          data-image="${item.image}"
          data-type="${type}"
        >
          Add to Cart
        </button>
      </div>
    </div>
  `).join('');
}

export function setupFilters(items, type) {
  const filterBar = document.getElementById('categoryFilters');
  if (!filterBar) return;

  const categories = [...new Set(items.map(i => i.category))];
  filterBar.innerHTML = `<button class="filter-btn active" data-category="all">All</button>` +
    categories.map(cat => `<button class="filter-btn" data-category="${cat}">${cat}</button>`).join('');

  filterBar.addEventListener('click', e => {
    if (!e.target.classList.contains('filter-btn')) return;
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
    currentCategory = e.target.dataset.category;
    renderGallery(items, type);
  });
}
