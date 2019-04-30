import '../styles/styles.scss';
import { BABEL, TsClass } from './script';

export class Common {

    constructor(titleElem) {
        this.titleSelector = titleElem;
    }

    populateTitle() {
        const title = document.getElementById(this.titleSelector);
        const tsInstance = new TsClass();
        title.innerHTML = `This is ${tsInstance.getName()}`;
        console.log(BABEL);
    }
}

