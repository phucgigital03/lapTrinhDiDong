"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor() {
        this._name = "";
    }
    getName() {
        return this._name;
    }
    setName(value) {
        if (!value.trim())
            throw new Error("Name cannot be empty");
        this._name = value;
    }
    toString() {
        return `User(name=${this._name})`;
    }
}
exports.User = User;
