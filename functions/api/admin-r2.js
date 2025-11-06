export async function onRequest(context) {
  const { request, env } = context;
  const method = request.method;

  if (method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  const contentType = request.headers.get("content-type") || "";
  if (!contentType.includes("multipart/form-data")) {
    return new Response("Expected multipart form data", { status: 400 });
  }

  const formData = await request.formData();
  const file = formData.get("file");
  const path = formData.get("path");

  if (!file || !path) {
    return new Response("Missing file or path", { status: 400 });
  }

  const arrayBuffer = await file.arrayBuffer();
  const mimeType = file.type || "application/octet-stream";

  await env.r2_images.put(path, arrayBuffer, {
    httpMetadata: { contentType: mimeType }
  });

  const publicUrl = `/r2-images/${path}`;
  return Response.json({ url: publicUrl });
}
