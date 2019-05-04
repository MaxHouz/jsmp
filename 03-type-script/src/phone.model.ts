import { Product } from './product.abstract';
import { ProductDto } from './product.dto';

export class Phone extends Product implements ProductDto {

    private sold = false;

    constructor(
        public id: number,
        public name: string,
        public price: number,
        public description: string
    ) {
        super(description);
    }

    sellProduct(): void {
        this.sold = true;
    }
}
