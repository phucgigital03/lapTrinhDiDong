// bai22 placeholder

import { fetchOneTodo } from "./bai21";


// Exercise 22 (option A): call the same endpoint multiple times (parallel)
export async function fetchSameTodoMultiple(times: number): Promise<Object[]> {
  const calls = Array.from({ length: times }, () => fetchOneTodo());
  return Promise.all(calls);
}
