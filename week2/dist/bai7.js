"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.raceFirst = raceFirst;
// Promise.race() example: returns the first settled (resolved) promise
function delayedValue(name, ms, value) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`${name} resolved after ${ms}ms`);
            resolve({ name, value, ms });
        }, ms);
    });
}
function raceFirst() {
    const p1 = delayedValue("P1", 600, 10);
    const p2 = delayedValue("P2", 350, 20);
    const p3 = delayedValue("P3", 800, 30);
    return Promise.race([p1, p2, p3])
        .then(first => {
        console.log("Race winner:", first);
        return first;
    })
        .catch(err => {
        console.error("Race error:", err);
        throw err;
    });
}
// Auto-run demo (optional)
