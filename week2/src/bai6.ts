

// Simulate 3 async tasks (e.g., fetching data) and
// run them in parallel with Promise.all()

export function task(name: string, ms: number, value: number): Promise<number> {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(`${name} done after ${ms}ms`);
      resolve(value);
    }, ms);
  });
}

