"use strict";
// bai30 placeholder
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
exports.fetchTodosAllSettled = fetchTodosAllSettled;
exports.demoFetchTodosAllSettled = demoFetchTodosAllSettled;
const BASE = "https://jsonplaceholder.typicode.com/todos";
/**
 * fetchTodosAllSettled: fetch multiple todos and return per-id status.
 */
function fetchTodosAllSettled(ids) {
    return __awaiter(this, void 0, void 0, function* () {
        const promises = ids.map(id => fetch(`${BASE}/${id}`).then(r => {
            if (!r.ok)
                throw new Error(`HTTP ${r.status} for id ${id}`);
            return r.json();
        }));
        const settled = yield Promise.allSettled(promises);
        return settled.map((res, idx) => {
            const id = ids[idx];
            if (res.status === "fulfilled") {
                return { id, status: "fulfilled", value: res.value };
            }
            else {
                return { id, status: "rejected", reason: String(res.reason) };
            }
        });
    });
}
/**
 * demoFetchTodosAllSettled: logs a readable summary.
 */
function demoFetchTodosAllSettled() {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        const ids = [1, 2, 123456]; // include a bad id to show rejection (may still 200 on this API, adjust if needed)
        const reports = yield fetchTodosAllSettled(ids);
        for (const r of reports) {
            if (r.status === "fulfilled") {
                console.log(`ID ${r.id} OK: ${(_a = r.value) === null || _a === void 0 ? void 0 : _a.title}`);
            }
            else {
                console.warn(`ID ${r.id} FAILED: ${r.reason}`);
            }
        }
        return reports;
    });
}
// Example (uncomment to test):
// (async () => {
//   await demoFetchTodosAllSettled();
// })();
// ***Promise.all
// Nhận vào 1 mảng promise.
// Kết quả:
// Nếu tất cả promise thành công → trả về mảng kết quả.
// Nếu 1 promise thất bại → dừng luôn, reject ngay với lỗi đó.
// 👉 Dùng khi bạn muốn tất cả phải thành công, nếu không thì fail cả.
// ***Promise.allSettled
// Nhận vào 1 mảng promise.
// Kết quả: luôn resolve, trả về mảng với trạng thái của từng promise:
// { status: "fulfilled", value: ... }
// { status: "rejected", reason: ... }
// 👉 Dùng khi bạn muốn chạy hết tất cả promise, bất kể thành công hay thất bại.
