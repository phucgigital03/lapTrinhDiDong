"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.returnRandomNumber = void 0;
exports.returnRandomNumber = new Promise((res, rej) => {
    setTimeout(() => {
        res(Math.random());
    }, 1000);
});
