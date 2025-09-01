"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomNumber = getRandomNumber;
function getRandomNumber() {
    return new Promise((res, rej) => {
        const min = 10;
        const max = 30;
        const val = Math.floor(Math.random() * (max - min + 1)) + min; // 10..30 inclusive
        setTimeout(() => {
            if (val < 20) {
                rej(new Error("Error: Number is less than 20"));
            }
            else {
                res(val);
            }
        }, 1000);
    });
}
