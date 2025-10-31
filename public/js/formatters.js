// formatters.js

export function formatProduct(item) {


  //console.log("Blog Debug:", {
  //  title: item.title,
  //  author: item.author,
  //  shortcontent: item.shortcontent?.slice(0, 100) || ''
  //});

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
  
  //console.log("Blog Debug:", {
  //  title: item.title,
  //  author: item.author,
  //  shortcontent: item.shortcontent?.slice(0, 100) || ''
  //});
  return `
    <div class="blogs-card">
      <div class="blog-card-layout">
        <img src="${item.image}" alt="${item.title}" class="blog-card-image" />
        <div class="blog-card-info">
          <h3>Title: ${item.title}</h3>
          <p>Author: ${item.author || ''}</p>
          <p>Shortcontent: ${item.shortcontent || ''}</p>
          <span class="blog-card-date">${new Date(item.createdAt).toLocaleDateString()}</span>
          <a href="/blog-slug/${item.slug}" class="read-more">Read more →</a>

        </div>
      </div>
    </div>
  `;
}






export function formatGallery(item) {
  //console.log(`${item.image}`); // ✅ logs actual image value

  return `
    <img src="${item.image}" alt="${item.title}" class="product-image" />
    <div class="gallery-info">
      <h3>${item.title}</h3>
      <p>${item.description || ''}</p>
    </div>
  `;
}