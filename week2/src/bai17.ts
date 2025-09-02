// bai17 placeholder

// bai17 placeholder

// Create an array of Promises that resolve at different times
const promiseArray: Promise<string>[] = [
  new Promise(res => setTimeout(() => res("First done (2000ms)"), 2000)),
  new Promise(res => setTimeout(() => res("Second done (1000ms)"), 1000)),
  new Promise(res => setTimeout(() => res("Third done (800ms)"), 800)),
];

// for await...of will await each element (order is array order, not completion order)
export async function iteratePromisesInOrder(): Promise<void> {
  for await (const result of promiseArray) {
    console.log("Sequential (array order):", result);
  }
}

// If you want to process as they finish, use Promise.all with mapping
export async function iterateAsTheyFinish(): Promise<void> {
  const entries = promiseArray.map(p =>
    p.then(value => ({ value }))
  );
  for (const { value } of await Promise.all(entries)) {
    console.log("Completed (any order collected, then logged in array order):", value);
  }
}

// Quick demo (uncomment to test):
// (async () => {
//   await iteratePromisesInOrder();
//   await iterateAsTheyFinish();
// })();

// ...existing code...
export async function demoBai17(){
    const start = Date.now();
    await iteratePromisesInOrder();
    console.log(`demoBai17 (iteratePromisesInOrder) took ${Date.now() - start} ms`);
}

export async function demoBai17_2(){
    const start = Date.now();
    await iterateAsTheyFinish();
    console.log(`demoBai17_2 (iterateAsTheyFinish) took ${Date.now() - start} ms`);
}


// They currently take about the same time (~2000 ms). Reason:

// promiseArray is created once; all three timers start immediately.
// iteratePromisesInOrder waits for the first (2000 ms). The other two have already resolved by then, so they log immediately afterward. Total ≈ max(2000,1000,800) = 2000 ms.
// iterateAsTheyFinish does Promise.all on the same already-running promises, which also resolves when the slowest (2000 ms) finishes. Total ≈ 2000 ms.
// So demoBai17 and demoBai17_2 finish in roughly the same time.

// If you want a clear difference, 
// create functions that start promises only when awaited (sequential vs parallel):

// const makeTask = (label: string, ms: number) => () =>
//   new Promise<string>(res => setTimeout(() => res(`${label} (${ms}ms)`), ms));

// const taskFactories = [
//   makeTask("First", 2000),
//   makeTask("Second", 1000),
//   makeTask("Third", 800),
// ];

// // Sequential (now sums: 2000+1000+800 ≈ 3800 ms)
// export async function sequentialLazy() {
//   const start = Date.now();
//   for (const fn of taskFactories) {
//     console.log(await fn());
//   }
//   console.log("sequentialLazy took", Date.now() - start, "ms");
// }

// // Parallel (now max ≈ 2000 ms)
// export async function parallelLazy() {
//   const start = Date.now();
//   const results = await Promise.all(taskFactories.map(f => f()));
//   results.forEach(r => console.log(r));
//   console.log("parallelLazy took", Date.now() - start, "ms");
// }
