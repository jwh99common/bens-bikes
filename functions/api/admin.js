export async function onRequest(context) {
  const db = context.env.gallery_db;
  const { request } = context;

  console.log("🛠️ Admin D1 operation triggered from /functions/api/admin.js");

  if (request.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }
  console.log("🛠️ Admin D1 operation we have a POST");

  try {
    const data = await request.json();

    console.log("🛠️ Admin D1 data sent is:", data);

    if (!data.title || !data.slug || !data.content) {
      return new Response('Missing required fields', { status: 400 });
    }
    
    console.log("🛠️ Admin D1 preparing the data");

    await db.prepare(`
      INSERT INTO bens_bikes_blogs (title, slug, author, image, content)
      VALUES (?, ?, ?, ?, ?)
    `).bind(
      data.title,
      data.slug,
      data.author || '',
      data.image || '',
      data.content
    ).run();

    console.log(`✅ Admin posted blog: ${data.title}`);
    return new Response('Blog posted successfully', { status: 201 });
  } catch (err) {
    console.error('❌ Admin post failed:', err);
    return new Response('Internal Server Error', { status: 500 });
  }
}
