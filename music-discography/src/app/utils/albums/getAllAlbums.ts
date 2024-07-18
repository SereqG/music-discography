export async function getAllAlbums() {
  const res = await fetch("http://localhost:3001/albums", {
    cache: "no-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
