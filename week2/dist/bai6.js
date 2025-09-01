"use strict";
// Simulate 3 async tasks (e.g., fetching data) and
// run them in parallel with Promise.all()
Object.defineProperty(exports, "__esModule", { value: true });
exports.task = task;
function task(name, ms, value) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`${name} done after ${ms}ms`);
            resolve(value);
        }, ms);
    });
}
