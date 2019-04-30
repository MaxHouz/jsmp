import { Phone } from './phone.model';
import { Catalog } from './catalog';

const phoneCatalog = new Catalog<string, Phone>();
const phone = new Phone(1, 'name', 200, 'desc');

phoneCatalog.addItem(phone.name, phone);

console.log(phoneCatalog.getCatalog());
console.log(phoneCatalog.getItem('name'));
