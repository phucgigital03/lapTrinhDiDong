"use strict";
// bai28 placeholder
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.batchProcess = batchProcess;
// bai28 placeholder
// Simulate an async task
function makeTask(label, ms) {
    return new Promise(res => setTimeout(() => res(`${label} done in ${ms}ms`), ms));
}
/**
 * batchProcess: run 5 async tasks concurrently with Promise.all
 */
function batchProcess() {
    return __awaiter(this, void 0, void 0, function* () {
        const tasks = [
            makeTask("Task 1", 500),
            makeTask("Task 2", 900),
            makeTask("Task 3", 300),
            makeTask("Task 4", 700),
            makeTask("Task 5", 400),
        ];
        return Promise.all(tasks);
    });
}
// Example (uncomment to test):
// (async () => {
//   const results = await batchProcess();
//   console.log(results);
// })();
