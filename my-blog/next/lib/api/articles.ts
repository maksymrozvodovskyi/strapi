const API_URL = process.env.API_URL;

export async function getArticles() {
  const res = await fetch(`${API_URL}/articles`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    console.error("ARTICLES ERROR:", await res.text());
    return [];
  }

  const json = await res.json();

  return json.data;
}
