export class Bookshelf {
    constructor(books = []) {
        this.shelf = books;
    }

    addBook(book) {
        this.shelf.push(book);
    }

    * readBooks() {
        for (let book of this.shelf) {
            yield book.getStory();
        }
    }
}
