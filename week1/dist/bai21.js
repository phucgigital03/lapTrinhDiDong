"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Repository = void 0;
// bai21 placeholder
// Generic Repository with add() and getAll()
class Repository {
    constructor() {
        this.items = [];
    }
    add(item) {
        this.items.push(item);
    }
    getAll() {
        return [...this.items]; // return a shallow copy
    }
}
exports.Repository = Repository;
