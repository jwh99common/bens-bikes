export async function onRequest(context) {
  const db = context.env.gallery_db;
  const id = context.params.id;
  const method = context.request.method;

  if (!id) {
    return new Response("Missing service ID", { status: 400 });
  }

  if (method === "GET") {
    const { results } = await db
      .prepare("SELECT * FROM bens_bikes_services WHERE id = ?")
      .bind(id)
      .all();

    if (results.length === 0) {
      return new Response("Service not found", { status: 404 });
    }

    return Response.json(results[0]);
  }

  if (method === "DELETE") {
    await db
      .prepare("DELETE FROM bens_bikes_services WHERE id = ?")
      .bind(id)
      .run();

    return new Response("Service deleted", { status: 200 });
  }

  if (method === "PUT" || method === "POST") {
    const body = await context.request.json();
    const {
      title,
      description,
      long_description,
      image,
      price,
      category
    } = body;

    if (!title || !description || !price) {
      return new Response("Missing required fields", { status: 400 });
    }

    await db
      .prepare(`
        UPDATE bens_bikes_services
        SET title = ?, description = ?, long_description = ?, image = ?, price = ?, category = ?
        WHERE id = ?
      `)
      .bind(title, description, long_description, image, price, category, id)
      .run();

    return new Response("Service updated", { status: 200 });
  }

  return new Response("Method Not Allowed", { status: 405 });
}
