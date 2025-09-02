// bai20 placeholder

// bai20 placeholder

// Simulated API call (random 0.5s - 3s)
function fakeApi(): Promise<string> {
  const delay = 500 + Math.random() * 2500; // 500..3000 ms
  return new Promise(resolve =>
    setTimeout(() => resolve(`API success in ${Math.round(delay)} ms`), delay)
  );
}

// Generic timeout wrapper
function withTimeout<T>(promise: Promise<T>, ms: number, message = 'Timeout'): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    const id = setTimeout(() => reject(new Error(message)), ms);
    promise
      .then(v => { clearTimeout(id); resolve(v); })
      .catch(e => { clearTimeout(id); reject(e); });
  });
}

// Exported function: fails if > 2000 ms
export async function fetchWithTimeout(): Promise<string> {
  return withTimeout(fakeApi(), 2000, 'API call exceeded 2000 ms');
}

// Example (uncomment to test):
// fetchWithTimeout()
//   .then(res => console.log(res))
//   .catch(err => console.error('Error:', err.message));

