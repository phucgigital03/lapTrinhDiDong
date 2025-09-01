"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.return10 = void 0;
exports.return10 = new Promise((res) => {
    setTimeout(() => {
        res(10);
    }, 5000);
});
