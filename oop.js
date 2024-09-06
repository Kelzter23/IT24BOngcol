// Define the Book class
class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }

    toString() {
        return `'${this.title}' by ${this.author}`;
    }
}

// Define the Library class
class Library {
    constructor() {
        this.books = [];
    }

    addBook(title, author) {
        const book = new Book(title, author);
        this.books.push(book);
    }

    removeBook(title) {
        this.books = this.books.filter(book => book.title !== title);
    }

    listBooks() {
        if (this.books.length === 0) {
            console.log("No books in the library.");
        } else {
            this.books.forEach(book => console.log(book.toString()));
        }
    }
}

// Example usage
const library = new Library();
library.addBook("1984", "George Orwell");
library.addBook("To Kill a Mockingbird", "Harper Lee");

console.log("Library Books:");
library.listBooks();

library.removeBook("1984");

console.log("\nLibrary Books After Removal:");
library.listBooks();
