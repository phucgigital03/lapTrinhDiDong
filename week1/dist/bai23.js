"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardPayment = exports.CashPayment = void 0;
// CashPayment implementation
class CashPayment {
    pay(amount) {
        console.log(`Paying ${amount} by cash.`);
    }
}
exports.CashPayment = CashPayment;
// CardPayment implementation
class CardPayment {
    constructor(cardNumber) {
        this.cardNumber = cardNumber;
    }
    pay(amount) {
        console.log(`Paying ${amount} with card ****${this.cardNumber.slice(-4)}.`);
    }
}
exports.CardPayment = CardPayment;
