"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = exports.UserB15 = exports.BookB15 = void 0;
// bai15 placeholder
// ...existing code...
// Simple Book, User, Library with addBook method
class BookB15 {
    constructor(id, title, author) {
        this.id = id;
        this.title = title;
        this.author = author;
    }
}
exports.BookB15 = BookB15;
class UserB15 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
exports.UserB15 = UserB15;
class Library {
    constructor() {
        this.books = [];
        this.users = [];
    }
    addBook(book) {
        if (!this.books.find(b => b.id === book.id)) {
            this.books.push(book);
        }
    }
    addUser(user) {
        if (!this.users.find(u => u.id === user.id)) {
            this.users.push(user);
        }
    }
    listBooks() {
        return this.books.map(b => `${b.id} - ${b.title}`);
    }
    listUsers() {
        return this.users.map(u => `${u.id} - ${u.name}`);
    }
}
exports.Library = Library;
// ...existing
