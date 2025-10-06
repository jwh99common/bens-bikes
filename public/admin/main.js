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
