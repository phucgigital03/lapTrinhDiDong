"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
class Account {
    constructor(balance, iban) {
        var _a;
        this.balance = balance;
        this.iban = iban;
        this.internalId = ((_a = crypto.randomUUID) === null || _a === void 0 ? void 0 : _a.call(crypto)) || Math.random().toString(36).slice(2);
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error("Amount must be positive");
        this.balance += amount;
    }
    withdraw(amount) {
        if (amount <= 0)
            throw new Error("Amount must be positive");
        if (amount > this.balance)
            throw new Error("Insufficient funds");
        this.balance -= amount;
    }
    getInternalId() {
        return this.internalId;
    }
}
exports.Account = Account;
