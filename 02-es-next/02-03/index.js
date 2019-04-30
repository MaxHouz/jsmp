import { Book } from './Book.js';
import { Bookshelf } from "./Bookshelf.js";

window.addEventListener('DOMContentLoaded', () => {
    const name = 'Maksym';
    const age = 20;

    const book = new Book({ name, age });
    const shelf = new Bookshelf([book]);

    book.readStory();

    shelf.addBook(new Book({ name: 'John', age: 28}));

    const generator = shelf.readBooks();

    console.log(generator.next().value);
    console.log(generator.next().value);
});
