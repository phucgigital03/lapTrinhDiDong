// bai29 placeholder

// bai29 placeholder

// A task is a function returning a Promise
export type Task<T = unknown> = () => Promise<T>;

/**
 * queueProcess: run tasks sequentially (one finishes before next starts)
 */
export async function queueProcess<T>(tasks: Task<T>[]): Promise<T[]> {
  const results: T[] = [];
  for (const task of tasks) {
    results.push(await task());
  }
  return results;
}

// Helper to build a timed task
export const makeTask = (label: string, ms: number) => () =>
  new Promise<string>(res => {
    setTimeout(() => {
      console.log(`${label} done after ${ms}ms`);
      res(label);
    }, ms);
  });

// Example (uncomment to test):

