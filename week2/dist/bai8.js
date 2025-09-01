"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.squarePromise = squarePromise;
exports.doubleIt = doubleIt;
exports.addIt = addIt;
function squarePromise(num) {
    return new Promise((resolve, reject) => {
        if (typeof num === "number") {
            resolve(Math.sqrt(num));
        }
        else {
            reject(new Error("Input must be a number"));
        }
    });
}
function doubleIt(num) {
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
function addIt(num) {
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
