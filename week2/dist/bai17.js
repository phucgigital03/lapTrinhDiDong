"use strict";
// bai17 placeholder
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.iteratePromisesInOrder = iteratePromisesInOrder;
exports.iterateAsTheyFinish = iterateAsTheyFinish;
exports.demoBai17 = demoBai17;
exports.demoBai17_2 = demoBai17_2;
// bai17 placeholder
// Create an array of Promises that resolve at different times
const promiseArray = [
    new Promise(res => setTimeout(() => res("First done (2000ms)"), 2000)),
    new Promise(res => setTimeout(() => res("Second done (1000ms)"), 1000)),
    new Promise(res => setTimeout(() => res("Third done (800ms)"), 800)),
];
// for await...of will await each element (order is array order, not completion order)
function iteratePromisesInOrder() {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, e_1, _b, _c;
        try {
            for (var _d = true, promiseArray_1 = __asyncValues(promiseArray), promiseArray_1_1; promiseArray_1_1 = yield promiseArray_1.next(), _a = promiseArray_1_1.done, !_a; _d = true) {
                _c = promiseArray_1_1.value;
                _d = false;
                const result = _c;
                console.log("Sequential (array order):", result);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (!_d && !_a && (_b = promiseArray_1.return)) yield _b.call(promiseArray_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    });
}
// If you want to process as they finish, use Promise.all with mapping
function iterateAsTheyFinish() {
    return __awaiter(this, void 0, void 0, function* () {
        const entries = promiseArray.map(p => p.then(value => ({ value })));
        for (const { value } of yield Promise.all(entries)) {
            console.log("Completed (any order collected, then logged in array order):", value);
        }
    });
}
// Quick demo (uncomment to test):
// (async () => {
//   await iteratePromisesInOrder();
//   await iterateAsTheyFinish();
// })();
// ...existing code...
function demoBai17() {
    return __awaiter(this, void 0, void 0, function* () {
        const start = Date.now();
        yield iteratePromisesInOrder();
        console.log(`demoBai17 (iteratePromisesInOrder) took ${Date.now() - start} ms`);
    });
}
function demoBai17_2() {
    return __awaiter(this, void 0, void 0, function* () {
        const start = Date.now();
        yield iterateAsTheyFinish();
        console.log(`demoBai17_2 (iterateAsTheyFinish) took ${Date.now() - start} ms`);
    });
}
// They currently take about the same time (~2000 ms). Reason:
// promiseArray is created once; all three timers start immediately.
// iteratePromisesInOrder waits for the first (2000 ms). The other two have already resolved by then, so they log immediately afterward. Total ≈ max(2000,1000,800) = 2000 ms.
// iterateAsTheyFinish does Promise.all on the same already-running promises, which also resolves when the slowest (2000 ms) finishes. Total ≈ 2000 ms.
// So demoBai17 and demoBai17_2 finish in roughly the same time.
// If you want a clear difference, 
// create functions that start promises only when awaited (sequential vs parallel):
// const makeTask = (label: string, ms: number) => () =>
//   new Promise<string>(res => setTimeout(() => res(`${label} (${ms}ms)`), ms));
// const taskFactories = [
//   makeTask("First", 2000),
//   makeTask("Second", 1000),
//   makeTask("Third", 800),
// ];
// // Sequential (now sums: 2000+1000+800 ≈ 3800 ms)
// export async function sequentialLazy() {
//   const start = Date.now();
//   for (const fn of taskFactories) {
//     console.log(await fn());
//   }
//   console.log("sequentialLazy took", Date.now() - start, "ms");
// }
// // Parallel (now max ≈ 2000 ms)
// export async function parallelLazy() {
//   const start = Date.now();
//   const results = await Promise.all(taskFactories.map(f => f()));
//   results.forEach(r => console.log(r));
//   console.log("parallelLazy took", Date.now() - start, "ms");
// }
