document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('blogForm');
  const status = document.getElementById('status');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form));

    // ✅ Auto-generate slug from title
    data.slug = data.title?.toLowerCase()
      .replace(/\s+/g, '-')       // replace spaces with hyphens
      .replace(/[^\w-]/g, '')     // remove non-word characters
      .replace(/--+/g, '-')       // collapse multiple hyphens
      .trim();

    console.log("📤 Sending blog data:", data);

    try {
      const res = await fetch('/api/admin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      status.textContent = '✅ Blog posted successfully!';
      form.reset();
    } catch (err) {
      status.textContent = `❌ Failed to post: ${err.message}`;
    }
  });
});
