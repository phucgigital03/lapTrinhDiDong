"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.returnRej = void 0;
exports.returnRej = new Promise((res, rej) => {
    setTimeout(() => {
        rej("Something went wrong");
    }, 3000);
});
