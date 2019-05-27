import './styles.css';
import { HttpService as httpService } from "./services/http.service";
import { Subject } from "rxjs";
import { map } from "rxjs/operators";

const postsContainer = document.getElementById('posts-list');
const loadButton = document.getElementById('load-button');

const buttonSubject = new Subject();

loadButton.addEventListener('click', fireSubject);

function loadPosts() {
    return httpService.getData('https://jsonplaceholder.typicode.com/posts').pipe(
        map((data) => {
            let postsMarkup = '';
            data.forEach(post => {
                postsMarkup += `
                <h2>${post.title}</h2>
                <p>${post.body}</p>`;
            });
            return postsMarkup;
        })
    );
}

function fireSubject() {
    loadPosts().subscribe(data => buttonSubject.next(data));
}

buttonSubject.subscribe(posts => postsContainer.innerHTML = posts);
