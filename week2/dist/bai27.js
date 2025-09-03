"use strict";
// bai27 placeholder
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
exports.fetchWithRetry = fetchWithRetry;
// bai27 fetchWithRetry
// Optional small delay helper
const sleep = (ms) => new Promise(res => setTimeout(res, ms));
/**
 * Fetch with retries (exponential backoff).
 * retries = number of additional attempts after the first try.
 */
function fetchWithRetry(url_1, retries_1, init_1) {
    return __awaiter(this, arguments, void 0, function* (url, retries, init, baseDelayMs = 300) {
        let attempt = 0;
        let lastError;
        while (attempt <= retries) {
            try {
                const res = yield fetch(url, init);
                if (!res.ok) {
                    throw new Error(`HTTP ${res.status}`);
                }
                return res.json();
            }
            catch (err) {
                lastError = err;
                if (attempt === retries)
                    break;
                const delay = baseDelayMs * Math.pow(2, attempt);
                yield sleep(delay);
                attempt++;
            }
        }
        throw new Error(`fetchWithRetry failed after ${retries + 1} attempts: ${String(lastError)}`);
    });
}
// Example (uncomment to test):
//
