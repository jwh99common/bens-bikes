document.getElementById('blogForm').addEventListener('submit', async (e) => {
  e.preventDefault(); // prevent default form submission

  const form = e.target;
  const title = form.title.value.trim();
  const slug = title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
  const author = form.author.value.trim();
  const image = form.image.value.trim();
  const content = form.content.value.trim();

  const payload = { title, slug, author, image, content };

  const res = await fetch('/api/admin', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  const status = document.getElementById('status');
  if (res.ok) {
    status.textContent = `✅ Blog posted: ${title}`;
    form.reset();
  } else {
    status.textContent = `❌ Failed to post blog.`;
  }
});
