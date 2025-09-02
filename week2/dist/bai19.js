"use strict";
// bai19 placeholder
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
exports.fetchUsers = fetchUsers;
exports.fetchUsersSequential = fetchUsersSequential;
function fetchUser(id) {
    const delay = 2000;
    return new Promise(resolve => setTimeout(() => resolve({ id, name: `User${id}` }), delay));
}
// Parallel: fetch all users concurrently
function fetchUsers(ids) {
    return __awaiter(this, void 0, void 0, function* () {
        const promises = ids.map(id => fetchUser(id));
        return Promise.all(promises);
    });
}
// Sequential version (if needed)
function fetchUsersSequential(ids) {
    return __awaiter(this, void 0, void 0, function* () {
        const results = [];
        for (const id of ids) {
            results.push(yield fetchUser(id));
        }
        return results;
    });
}
// Example (uncomment to test):
// fetchUsers([1,2,3,4]).then(console.log);
// fetchUsersSequential([1,2,3,4]).then(console.log);
