// bai27 placeholder


// bai27 fetchWithRetry

// Optional small delay helper
const sleep = (ms: number) => new Promise(res => setTimeout(res, ms));

/**
 * Fetch with retries (exponential backoff).
 * retries = number of additional attempts after the first try.
 */
export async function fetchWithRetry<T = unknown>(
  url: string,
  retries: number,
  init?: RequestInit,
  baseDelayMs: number = 300
): Promise<T> {
  let attempt = 0;
  let lastError: unknown;

  while (attempt <= retries) {
    try {
      const res = await fetch(url, init);
      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }
      return res.json() as Promise<T>;
    } catch (err) {
      lastError = err;
      if (attempt === retries) break;
      const delay = baseDelayMs * 2 ** attempt;
      await sleep(delay);
      attempt++;
    }
  }

  throw new Error(`fetchWithRetry failed after ${retries + 1} attempts: ${String(lastError)}`);
}

// Example (uncomment to test):

//
