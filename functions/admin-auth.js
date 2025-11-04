import { setCookie } from './utils/cookies.js';

export async function onRequest({ request, env }) {
  // Parse the submitted form data
  const formData = await request.formData();
  const input = formData.get('pw');

  // Retrieve the stored password from KV
  const stored = await env.bens_bikes.get('password');

  // Validate the password
  if (input !== stored) {
    return new Response("Unauthorized", { status: 403 });
  }

  // Create a redirect response to the dashboard
  const response = new Response(null, {
    status: 302,
    headers: { Location: "/admin-pages/admindashboard" }
  });

  // Set a secure cookie for session auth
  setCookie(response, "admin_auth", "true", {
    httpOnly: true,
    path: "/",
    maxAge: 3600 // 1 hour session
  });

  // Optional: log successful login
  console.log("Admin login successful:", new Date().toISOString());

  return response;
}
