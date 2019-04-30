export class Book {
    constructor(character = { name: 'Default', age: 0 }) {
        const { name, age } = character;
        this.name = name;
        this.age = age;
    }

    getStory() {
        return this._createStory().join(' ');
    }

    readStory() {
        for (let line of this._createStory()) {
            console.log(line);
        }
    }

    //* Private */

    _createStory() {
        return [
            `This is a story about ${this.name},`,
            'who decided',
            'to start learning JavaScript',
            `at the age of ${this.age}`
        ];
    }
}
