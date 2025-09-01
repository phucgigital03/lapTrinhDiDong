"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankAccount = void 0;
class BankAccount {
    constructor(balance = 0) {
        this.balance = balance;
    }
    getBalance() {
        return this.balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error("Deposit must be positive");
        this.balance += amount;
    }
    withdraw(amount) {
        if (amount <= 0)
            throw new Error("Withdrawal must be positive");
        if (amount > this.balance)
            throw new Error("Insufficient funds");
        this.balance -= amount;
    }
    toString() {
        return `BankAccount balance=${this.balance}`;
    }
}
exports.BankAccount = BankAccount;
