

export class Account {
  // public (default) balance
  public balance: number;

  // private internal id (not accessible outside)
  private internalId: string;

  // readonly IBAN (can set in constructor only)
  readonly iban: string;

  constructor(balance: number, iban: string) {
    this.balance = balance;
    this.iban = iban;
    this.internalId = crypto.randomUUID?.() || Math.random().toString(36).slice(2);
  }

  deposit(amount: number): void {
    if (amount <= 0) throw new Error("Amount must be positive");
    this.balance += amount;
  }

  withdraw(amount: number): void {
    if (amount <= 0) throw new Error("Amount must be positive");
    if (amount > this.balance) throw new Error("Insufficient funds");
    this.balance -= amount;
  }

  getInternalId(): string {
    return this.internalId;
  }
}


