import XmlHttpService from './xml-http-service.js';

const getBtn = document.getElementById('get');
const postBtn = document.getElementById('post');
const putBtn = document.getElementById('put');
const deleteBtn = document.getElementById('delete');
const asyncBtn = document.getElementById('async');

getBtn.addEventListener('click', () => {
    XmlHttpService.get('https://swapi.co/api/people/1/')
        .then((response) => console.log(response))
        .catch((error) => console.error(error));
});

postBtn.addEventListener('click', () => {
    XmlHttpService.post('https://jsonplaceholder.typicode.com/posts', { data: 'data' });
});

putBtn.addEventListener('click', () => {
    XmlHttpService.put('https://jsonplaceholder.typicode.com/posts/1', { data: 'data' });
});

deleteBtn.addEventListener('click', () => {
    ['https://jsonplaceholder.typicode.com/posts/1'].map(XmlHttpService.delete);
});

asyncBtn.addEventListener('click', async() => {
    const film = await fetchData('https://swapi.co/api/films/1/');
    const characters = await Promise.all(film.characters.map(fetchData));

    console.table(characters);
});

async function fetchData(url) {
    const result = await fetch(url);
    return result.json();
}
