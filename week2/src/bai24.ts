// bai24 placeholder
// ...existing code...
// bai24 placeholder
// ...existing code...

export interface PostPayload {
  title: string;
  body: string;
  userId: number;
}

export interface PostResponse extends PostPayload {
  id: number; // returned by test API
}

export async function postData(payload: PostPayload): Promise<PostResponse> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error(`POST failed: ${res.status}`);
  }

  return res.json();
}
