// bai9 placeholder
export const processArray = (arr: number[]): Promise<number[]> => {
    return new Promise((resolve, reject) => {
        if (arr.length === 0) {
            reject("Array is empty");
        } else {
            setTimeout(() => {
                const processedArray = arr.filter(num => num % 2 === 0);
                resolve(processedArray);
            }, 1000);
        }
    });
};
