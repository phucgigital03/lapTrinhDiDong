"use strict";
// bai18 placeholder
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
exports.getUserInfo = getUserInfo;
const fakeUser = new Promise((resolve) => {
    setTimeout(() => {
        resolve({ name: "John Doe", age: 30 });
    }, 5000);
});
function getUserInfo() {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield fakeUser;
        return `User Info: Name - ${user.name}, Age - ${user.age}`;
    });
}
