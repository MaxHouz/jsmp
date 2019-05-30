import './styles.css';
import { fromEvent, Subject } from "rxjs";
import { switchMap } from "rxjs/operators";
import { loadPosts, filterBySelector } from "./services/utils";
import { map, debounceTime } from "rxjs/operators";

const postsContainer = document.getElementById('posts-list');
const loadButton = document.getElementById('load-button');

const filterInput = document.getElementById('posts-input');

const buttonSubject = new Subject();

fromEvent(loadButton, 'click').pipe(
    switchMap(() => loadPosts())
).subscribe((data) => buttonSubject.next(data));

fromEvent(filterInput, 'input').pipe(
    map((event) => event.srcElement.value),
    debounceTime(1000)
).subscribe((query) => {
    filterBySelector(query, postsContainer)
});

buttonSubject.subscribe(posts => postsContainer.innerHTML = posts);
