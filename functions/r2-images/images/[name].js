export async function onRequest(context) {
  const { id } = context.params;
  const bucket = context.env.r2_images;

  if (!id || typeof id !== "string") {
    console.warn("Missing or invalid image ID");
    return new Response("Bad request", { status: 400 });
  }

  if (!bucket || typeof bucket.get !== "function") {
    console.warn("R2 binding 'r2_images' not available");
    return new Response("R2 not configured", { status: 500 });
  }

  const imageKey = `images/${id.trim()}`;
  const object = await bucket.get(imageKey);

  if (!object) {
    console.warn(`Image '${imageKey}' not found in R2`);
    return new Response("Image not found", { status: 404 });
  }

  return new Response(object.body, {
    headers: {
      "Content-Type": object.httpMetadata?.contentType || "image/png",
      "Cache-Control": "public, max-age=3600",
      "X-R2-Served": "true"
    }
  });
}
