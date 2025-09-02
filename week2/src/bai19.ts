// bai19 placeholder


// bai19 placeholder

// Simulated single-user fetch
interface User {
  id: number;
  name: string;
}

function fetchUser(id: number): Promise<User> {
  const delay = 2000;
  return new Promise(resolve =>
    setTimeout(() => resolve({ id, name: `User${id}` }), delay)
  );
}

// Parallel: fetch all users concurrently
export async function fetchUsers(ids: number[]): Promise<User[]> {
  const promises = ids.map(id => fetchUser(id));
  return Promise.all(promises);
}

// Sequential version (if needed)
export async function fetchUsersSequential(ids: number[]): Promise<User[]> {
  const results: User[] = [];
  for (const id of ids) {
    results.push(await fetchUser(id));
  }
  return results;
}

// Example (uncomment to test):
// fetchUsers([1,2,3,4]).then(console.log);
// fetchUsersSequential([1,2,3,4]).then(console.log);
