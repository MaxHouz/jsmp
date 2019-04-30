export class Catalog<T, H> {
    private catalog: { name: T, value: H }[] = [];

    getCatalog(): { name: T, value: H }[] {
        return this.catalog;
    }

    addItem(name: T, value: H): void {
        this.catalog.push({ name, value });
    }

    getItem(name: T): H {
        const index = this.catalog.findIndex(item => item.name === name);

        return this.getCatalog()[index].value;
    }
}
