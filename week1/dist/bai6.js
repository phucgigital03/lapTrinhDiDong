"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.author = author;
        this.title = title;
        this.year = year;
    }
    getTitle() { return this.title; }
    getAuthor() { return this.author; }
    getYear() { return this.year; }
    setTitle(title) { this.title = title; }
    setAuthor(author) { this.author = author; }
    setYear(year) { this.year = year; }
    info() {
        return `"${this.title}" by ${this.author} (${this.year})`;
    }
}
exports.Book = Book;
