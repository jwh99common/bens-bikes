async function loadOrders() {
  const res = await fetch('/api/orders');
  const orders = await res.json();
  const container = document.getElementById('orders');

  container.innerHTML = orders.map(order => `
    <div class="order-card">
      <h3>Order #${order.id} — ${order.status}</h3>
      <p><strong>${order.name}</strong> (${order.email})</p>
      <p>Phone: ${order.phone || '—'}</p>
      <ul>
        ${JSON.parse(order.cart).map(item => `
          <li>${item.title} × ${item.quantity} — £${item.price}</li>
        `).join('')}
      </ul>
      <button data-id="${order.id}" data-status="processed">Mark as processed</button>
    </div>
  `).join('');

  document.querySelectorAll('button[data-status]').forEach(btn => {
    btn.addEventListener('click', async () => {
      const id = btn.dataset.id;
      const status = btn.dataset.status;
      await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status })
      });
      loadOrders(); // refresh
    });
  });
}

loadOrders();
