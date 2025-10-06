document.addEventListener('DOMContentLoaded', () => {
  const selector = document.getElementById('adminType');
  selector.addEventListener('change', () => {
    const type = selector.value;
    loadAdmin(type);
  });

  loadAdmin('blogs'); // default
  setupImageUpload();
});

function loadAdmin(type) {
  const endpoint = `/api/${type}`;
  const container = document.getElementById('adminList');
  const title = document.getElementById('adminTitle');
  title.textContent = type.charAt(0).toUpperCase() + type.slice(1);

  fetch(endpoint)
    .then(res => res.json())
    .then(items => {
      container.innerHTML = '';
      items.forEach(item => {
        const div = document.createElement('div');
        div.className = 'admin-item';
        div.innerHTML = `
          <strong>${item.name || item.title}</strong><br />
          ${item.description || item.content || ''}<br />
          <button onclick="editItem('${type}', ${item.id})">Edit</button>
          <button onclick="deleteItem('${type}', ${item.id})">Delete</button>
        `;
        container.appendChild(div);
      });
    })
    .catch(err => {
      console.error(`❌ Failed to load ${type}:`, err);
    });

  const addBtn = document.getElementById('addItem');
  addBtn.onclick = () => alert(`Add ${type} — scaffold coming soon`);
}

function setupImageUpload() {
  const form = document.getElementById('uploadForm');
  const status = document.getElementById('status');
  const imageList = document.getElementById('imageList');

  form?.addEventListener('submit', async (e) => {
    e.preventDefault();

    const file = form.elements.file.files[0];
    const alt = form.elements.alt.value;
    const tags = form.elements.tags.value;
    const filename = `${Date.now()}-${file.name}`;

    const formData = new FormData();
    formData.append('file', file);
    formData.append('filename', filename);

    try {
      // Upload to R2
      const uploadRes = await fetch('/api/upload-r2', {
        method: 'POST',
        body: formData
      });
      const { url } = await uploadRes.json();

      // Save metadata to D1
      await fetch('/api/images', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ filename, url, alt, tags })
      });

      status.textContent = `✅ Uploaded: ${url}`;
      form.reset();
      loadImages(); // Refresh image list
    } catch (err) {
      console.error('❌ Upload failed:', err);
      status.textContent = '❌ Upload failed';
    }
  });

  loadImages();
}

async function loadImages() {
  const imageList = document.getElementById('imageList');
  if (!imageList) return;

  try {
    const res = await fetch('/api/list-images');
    const files = await res.json();
    imageList.innerHTML = '';

    files.forEach(file => {
      const img = document.createElement('img');
      img.src = file.url;
      img.alt = file.alt || file.key;
      img.className = 'thumbnail';
      imageList.appendChild(img);
    });
  } catch (err) {
    console.error('❌ Failed to load images:', err);
  }
}
