// bai15 placeholder
// ...existing code...
// Simple Book, User, Library with addBook method
class BookB15 {
  constructor(public id: number, public title: string, public author: string) {}
}

class UserB15 {
  constructor(public id: number, public name: string) {}
}

class Library {
  private books: BookB15[] = [];
  private users: UserB15[] = [];

  addBook(book: BookB15): void {
    if (!this.books.find(b => b.id === book.id)) {
      this.books.push(book);
    }
  }

  addUser(user: UserB15): void {
    if (!this.users.find(u => u.id === user.id)) {
      this.users.push(user);
    }
  }

  listBooks(): string[] {
    return this.books.map(b => `${b.id} - ${b.title}`);
  }

  listUsers(): string[] {
    return this.users.map(u => `${u.id} - ${u.name}`);
  }
}

export { BookB15, UserB15, Library };
// ...existing