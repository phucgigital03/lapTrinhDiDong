"use strict";
// bai15 placeholder
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
exports.process2Func = process2Func;
const func = function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield new Promise(resolve => setTimeout(resolve, 1000)); // Giả lập độ trễ 1 giây
        return 1;
    });
};
const func2 = function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield new Promise(resolve => setTimeout(resolve, 1000)); // Giả lập độ trễ 1 giây
        return 2;
    });
};
function process2Func() {
    return __awaiter(this, void 0, void 0, function* () {
        const res1 = yield func();
        const res2 = yield func2();
        return res1 + res2;
    });
}
