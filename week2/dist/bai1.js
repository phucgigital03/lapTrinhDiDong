"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.returnHell0 = void 0;
exports.returnHell0 = new Promise((res) => {
    setTimeout(() => {
        res("Hello Async");
    }, 2000);
});
