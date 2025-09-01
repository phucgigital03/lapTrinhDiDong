// bai21 placeholder
// Generic Repository with add() and getAll()
class Repository<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  getAll(): T[] {
    return [...this.items]; // return a shallow copy
  }
}

// Demo (optional)
// const repo = new Repository<number>();
// repo.add(1); repo.add(2);
// console.log(repo.getAll());

export { Repository };
