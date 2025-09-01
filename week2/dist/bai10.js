"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.doneFunc = void 0;
// bai10 placeholder
const doSomeThing = new Promise((resolve, reject) => {
    const min = 1;
    const max = 10;
    const val = Math.floor(Math.random() * (max - min + 1)) + min;
    if (val > 5) {
        resolve("Success");
    }
    else {
        reject("Failure");
    }
});
const doneFunc = () => {
    return new Promise((resolve, rej) => {
        doSomeThing
            .then((res) => {
            console.log(res);
        })
            .catch((err) => {
            console.error(err);
        })
            .finally(() => {
            console.log("Done");
        });
    });
};
exports.doneFunc = doneFunc;
