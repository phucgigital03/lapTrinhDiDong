// bai30 placeholder

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

interface SettledReport {
  id: number;
  status: "fulfilled" | "rejected";
  value?: Todo;
  reason?: string;
}

const BASE = "https://jsonplaceholder.typicode.com/todos";

/**
 * fetchTodosAllSettled: fetch multiple todos and return per-id status.
 */
export async function fetchTodosAllSettled(ids: number[]): Promise<SettledReport[]> {
  const promises = ids.map(id =>
    fetch(`${BASE}/${id}`).then(r => {
      if (!r.ok) throw new Error(`HTTP ${r.status} for id ${id}`);
      return r.json() as Promise<Todo>;
    })
  );

  const settled = await Promise.allSettled(promises);

  return settled.map((res, idx): SettledReport => {
    const id = ids[idx];
    if (res.status === "fulfilled") {
      return { id, status: "fulfilled", value: res.value };
    } else {
      return { id, status: "rejected", reason: String(res.reason) };
    }
  });
}

/**
 * demoFetchTodosAllSettled: logs a readable summary.
 */
export async function demoFetchTodosAllSettled() {
  const ids = [1, 2, 123456]; // include a bad id to show rejection (may still 200 on this API, adjust if needed)
  const reports = await fetchTodosAllSettled(ids);
  for (const r of reports) {
    if (r.status === "fulfilled") {
      console.log(`ID ${r.id} OK: ${r.value?.title}`);
    } else {
      console.warn(`ID ${r.id} FAILED: ${r.reason}`);
    }
  }
  return reports;
}

// Example (uncomment to test):
// (async () => {
//   await demoFetchTodosAllSettled();
// })();

// ***Promise.all
// Nhận vào 1 mảng promise.
// Kết quả:
// Nếu tất cả promise thành công → trả về mảng kết quả.
// Nếu 1 promise thất bại → dừng luôn, reject ngay với lỗi đó.
// 👉 Dùng khi bạn muốn tất cả phải thành công, nếu không thì fail cả.

// ***Promise.allSettled
// Nhận vào 1 mảng promise.
// Kết quả: luôn resolve, trả về mảng với trạng thái của từng promise:
// { status: "fulfilled", value: ... }
// { status: "rejected", reason: ... }
// 👉 Dùng khi bạn muốn chạy hết tất cả promise, bất kể thành công hay thất bại.
