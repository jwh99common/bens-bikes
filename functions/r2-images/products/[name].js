export async function onRequest(context) {
  const { name } = context.params;
  const bucket = context.env.r2_images;

  console.log("🔍 Incoming request for image:", name);

  if (!name || typeof name !== "string") {
    console.warn("⚠️ Missing or invalid image name");
    return new Response("Bad request", { status: 400 });
  }

  if (!bucket || typeof bucket.get !== "function") {
    console.warn("⚠️ R2 binding 'r2_images' not available or misconfigured");
    return new Response("R2 not configured", { status: 500 });
  }

  const imageKey = `products/${name.trim()}`;
  console.log("📦 Attempting to fetch R2 key:", imageKey);
  
  // 🔍 TEMPORARY DEBUG: List all keys under images/
  const list = await bucket.list({ prefix: "products/" });
  console.log("🗂 Available keys:", list.objects.map(obj => obj.key));
  const object = await bucket.get(imageKey);

  if (!object) {
    console.warn(`❌ Image '${imageKey}' not found in R2`);
    return new Response("Image not found", { status: 404 });
  }

  console.log(`✅ Image '${imageKey}' found — serving response`);

  return new Response(object.body, {
    headers: {
      "Content-Type": object.httpMetadata?.contentType || "image/png",
      "Cache-Control": "public, max-age=3600",
      "X-R2-Served": "true"
    }
  });
}
