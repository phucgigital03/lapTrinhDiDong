// bai26 placeholder

// Helper delay
const sleep = (ms: number) => new Promise<void>(res => setTimeout(res, ms));

// Exercise 26: simulate a 5‑second wait
export async function waitFiveSeconds(): Promise<string> {
  await sleep(5000);
  return "Finished waiting 5 seconds";
}
