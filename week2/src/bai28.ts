// bai28 placeholder


// bai28 placeholder

// Simulate an async task
function makeTask(label: string, ms: number): Promise<string> {
  return new Promise(res => setTimeout(() => res(`${label} done in ${ms}ms`), ms));
}

/**
 * batchProcess: run 5 async tasks concurrently with Promise.all
 */
export async function batchProcess(): Promise<string[]> {
  const tasks: Promise<string>[] = [
    makeTask("Task 1", 500),
    makeTask("Task 2", 900),
    makeTask("Task 3", 300),
    makeTask("Task 4", 700),
    makeTask("Task 5", 400),
  ];
  return Promise.all(tasks);
}

// Example (uncomment to test):
// (async () => {
//   const results = await batchProcess();
//   console.log(results);
// })();
