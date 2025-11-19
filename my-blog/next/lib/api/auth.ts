const API_URL = process.env.API_URL;

if (!API_URL) {
  throw new Error("API_URL is not defined");
}

export async function loginRequest(identifier: string, password: string) {
  const res = await fetch(`${API_URL}/auth/local`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ identifier, password }),
  });

  if (!res.ok) {
    console.error("STRAPI LOGIN ERROR:", await res.text());
    return null;
  }

  return res.json();
}
