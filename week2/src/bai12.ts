// bai12 placeholder
// Exercise: simulateTask(time) returns a Promise resolving after time ms
export function simulateTask(time: number): Promise<string> {
  return new Promise(resolve => {
    setTimeout(() => resolve("Task done"), time);
  });
}

export async function callSimulatedTask() {
  const result = await simulateTask(1000);
  console.log(result);
}

