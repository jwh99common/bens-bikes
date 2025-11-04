import { isAuthorized } from '../utils/auth.js';

export async function onRequest({ request, env }) {
  if (!(await isAuthorized(env, request))) {
    return new Response("Unauthorized", { status: 403 });
  }

  const rewritten = new Request(`${new URL(request.url).origin}/admin-pages/adminblogs.html`, request);
  console.log("Request URL:", request.url);
  return env.ASSETS.fetch(rewritten);
}
