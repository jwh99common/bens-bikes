export async function onRequest(context) {
  const db = context.env.gallery_db;
  const method = context.request.method;

  if (method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  const body = await context.request.json();
  const {
    title,
    description,
    price,
    category,
    image,
    images,
    longDescription
  } = body;

  if (!title || !description || !price) {
    return new Response("Missing required fields", { status: 400 });
  }

  await db
    .prepare(`
      INSERT INTO bens_bikes_products (title, description, price, category, image, images, longDescription)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `)
    .bind(title, description, price, category, image, images, longDescription)
    .run();

  return new Response("Product created", { status: 201 });
}
