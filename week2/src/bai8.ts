

export function squarePromise(num : number) : Promise<number>{
  return new Promise((resolve, reject) => {
    if (typeof num === "number") {
      resolve(Math.sqrt(num));
    } else {
      reject(new Error("Input must be a number"));
    }
  });
}

export function doubleIt(num: number): Promise<number> {
  return new Promise((resolve, reject) => {
    squarePromise(num)
      .then(result => {
        resolve(result * 2);
      })
      .catch(err => {
        reject(err);
      });
  });
}

export function addIt(num: number): Promise<number> {
  return new Promise((resolve, reject) => {
    doubleIt(num)
      .then(result => {
        resolve(result + 10);
      })
      .catch(err => {
        reject(err);
      });
  });
}

