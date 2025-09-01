// bai23 placeholder
// Interface Payment with pay(amount)
interface Payment {
  pay(amount: number): void;
}

// CashPayment implementation
class CashPayment implements Payment {
  pay(amount: number): void {
    console.log(`Paying ${amount} by cash.`);
  }
}

// CardPayment implementation
class CardPayment implements Payment {
  constructor(private cardNumber: string) {}
  pay(amount: number): void {
    console.log(`Paying ${amount} with card ****${this.cardNumber.slice(-4)}.`);
  }
}



export { Payment, CashPayment, CardPayment };