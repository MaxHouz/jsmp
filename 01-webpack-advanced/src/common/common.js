import '../styles/styles.scss';
import { BABEL, TsClass } from './script';
const title = document.getElementById('title');

const tsInstance = new TsClass();
title.innerHTML = `This is ${tsInstance.getName()}`;
console.log(BABEL);
