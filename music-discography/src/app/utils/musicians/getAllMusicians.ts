export async function getAllMusicians() {
  const res = await fetch("http://localhost:3001/artists", {
    cache: "no-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
