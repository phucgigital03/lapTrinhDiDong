"use strict";
// bai20 placeholder
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
exports.fetchWithTimeout = fetchWithTimeout;
// bai20 placeholder
// Simulated API call (random 0.5s - 3s)
function fakeApi() {
    const delay = 500 + Math.random() * 2500; // 500..3000 ms
    return new Promise(resolve => setTimeout(() => resolve(`API success in ${Math.round(delay)} ms`), delay));
}
// Generic timeout wrapper
function withTimeout(promise, ms, message = 'Timeout') {
    return new Promise((resolve, reject) => {
        const id = setTimeout(() => reject(new Error(message)), ms);
        promise
            .then(v => { clearTimeout(id); resolve(v); })
            .catch(e => { clearTimeout(id); reject(e); });
    });
}
// Exported function: fails if > 2000 ms
function fetchWithTimeout() {
    return __awaiter(this, void 0, void 0, function* () {
        return withTimeout(fakeApi(), 2000, 'API call exceeded 2000 ms');
    });
}
// Example (uncomment to test):
// fetchWithTimeout()
//   .then(res => console.log(res))
//   .catch(err => console.error('Error:', err.message));
