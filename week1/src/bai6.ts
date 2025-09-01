
export class Book {
  constructor(
    private title: string,
    private author: string,
    private year: number
  ) {
    this.author = author;
    this.title = title;
    this.year = year;
  }

  getTitle(): string { return this.title; }
  getAuthor(): string { return this.author; }
  getYear(): number { return this.year; }

  setTitle(title: string): void { this.title = title; }
  setAuthor(author: string): void { this.author = author; }
  setYear(year: number): void { this.year = year; }

  info(): string {
    return `"${this.title}" by ${this.author} (${this.year})`;
  }
}
