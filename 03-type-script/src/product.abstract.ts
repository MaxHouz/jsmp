export abstract class Product {

    protected constructor(
        public description
    ) {}

    abstract sellProduct(): void;

    showDescription(): void {
        console.log(this.description);
    }
}
