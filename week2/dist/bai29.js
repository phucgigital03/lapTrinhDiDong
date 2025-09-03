"use strict";
// bai29 placeholder
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
exports.makeTask = void 0;
exports.queueProcess = queueProcess;
/**
 * queueProcess: run tasks sequentially (one finishes before next starts)
 */
function queueProcess(tasks) {
    return __awaiter(this, void 0, void 0, function* () {
        const results = [];
        for (const task of tasks) {
            results.push(yield task());
        }
        return results;
    });
}
// Helper to build a timed task
const makeTask = (label, ms) => () => new Promise(res => {
    setTimeout(() => {
        console.log(`${label} done after ${ms}ms`);
        res(label);
    }, ms);
});
exports.makeTask = makeTask;
// Example (uncomment to test):
