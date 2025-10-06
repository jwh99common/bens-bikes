let currentImages = [];
let currentIndex = 0;

export function setupModal() {
  const modal = document.getElementById('blogModal');
  const closeBtn = modal?.querySelector('.close');

  if (!modal || !closeBtn) {
    console.warn('Modal or close button not found');
    return;
  }

  closeBtn.addEventListener('click', () => {
    modal.classList.remove('open');
  });

  document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('open')) return;
    if (e.key === 'Escape') closeBtn.click();
  });
}

export function openModal(blog) {
  const modal = document.getElementById('blogModal');

  if (!modal) {
    console.warn('Modal element not found');
    return;
  }
  
  console.log("Opening modal with blog:", blog);

  currentImages = [blog.image];
  currentIndex = 0;

  document.getElementById('modalImage').src = blog.image;
  document.getElementById('modalImage').alt = blog.title;
  document.getElementById('modalTitle').textContent = blog.title;
  document.getElementById('modalAuthor').textContent = `By ${blog.author}`;
  document.getElementById('modalDate').textContent = new Date(blog.createdAt).toLocaleDateString();
  document.getElementById('modalContent').textContent = blog.content;

  const counter = document.getElementById('imageCounter');
  if (counter) {
    counter.textContent = `1 / 1`;
  }

  modal.classList.add('open');
}
