export async function onRequest(context) {
  const { env, params, request } = context;
  const id = params.id;
  const method = request.method;

  if (!id) return new Response("Missing image ID", { status: 400 });

  if (method === "GET") {
    const object = await env.r2_images.get(id);
    if (!object) return new Response("Image not found", { status: 404 });

    const headers = new Headers();
    object.writeHttpMetadata(headers);
    headers.set("etag", object.httpEtag);

    return new Response(object.body, { headers });
  }

  if (method === "DELETE") {
    await env.r2_images.delete(id);
    return new Response("Image deleted", { status: 200 });
  }

  return new Response("Method Not Allowed", { status: 405 });
}
