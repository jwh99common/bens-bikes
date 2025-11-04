import { isAuthorized } from '../utils/auth.js';

export async function onRequest({ request, env }) {
  if (!isAuthorized(request)) {
    return Response.redirect("/admin-login", 302);
  }

  const rewritten = new Request(`${new URL(request.url).origin}/admin-pages/admin-dashboard.html`, request);
  return env.ASSETS.fetch(rewritten);
}
