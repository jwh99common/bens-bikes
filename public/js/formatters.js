// formatters.js

export function formatProduct(item) {
  return `
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
        data-type="product"
      >
        Add to Cart
      </button>
    </div>
  `;
}

export function formatService(item) {
  return `
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
        data-type="service"
      >
        Add to Cart
      </button>
    </div>
  `;
}

export function formatMerchandise(item) {
  return `
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
        data-type="merchandise"
      >
        Add to Cart
      </button>
    </div>
  `;
}

export function formatBlog(item) {
  return `
    <div class="blog-card-layout">
      <img src="${item.image}" alt="${item.title}" class="blog-card-image" />
      <div class="blog-card-info">
        <h3>${item.title}</h3>
        <p>${item.excerpt || item.description || ''}</p>
        <span class="blog-card-date">${new Date(item.createdAt).toLocaleDateString()}</span>
      </div>
    </div>
  `;
}


export function formatGallery(item) {
  return `
    <img src="${item.image}" alt="${item.title}" class="gallery-image" />
    <div class="gallery-info">
      <h3>${item.title}</h3>
      <p>${item.description || ''}</p>
    </div>
  `;
}
