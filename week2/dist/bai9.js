"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.processArray = void 0;
// bai9 placeholder
const processArray = (arr) => {
    return new Promise((resolve, reject) => {
        if (arr.length === 0) {
            reject("Array is empty");
        }
        else {
            setTimeout(() => {
                const processedArray = arr.filter(num => num % 2 === 0);
                resolve(processedArray);
            }, 1000);
        }
    });
};
exports.processArray = processArray;
