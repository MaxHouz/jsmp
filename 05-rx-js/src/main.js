import { BehaviorSubject, combineLatest, fromEvent, Subject } from "rxjs";
import { map, debounceTime, switchMap } from "rxjs/operators";

import './styles.css';
import { loadPosts, filterPosts, convertPostsToMarkup } from "./services/utils";

const postsContainer = document.getElementById('posts-list');
const loadButton = document.getElementById('load-button');
const filterInput = document.getElementById('posts-input');

const posts$ = new BehaviorSubject([]);
const filteredPosts$ = new Subject();
const inputObservable$ = fromEvent(filterInput, 'input').pipe(
    map(event => event.srcElement.value),
    debounceTime(1000)
);

fromEvent(loadButton, 'click').pipe(
    switchMap(() => loadPosts())
).subscribe((data) => {
    posts$.next(data);
    filteredPosts$.next(data);
});

combineLatest(
    inputObservable$,
    posts$
).pipe(
    map(([query, posts]) => filterPosts(query, posts))
).subscribe(filteredPosts => filteredPosts$.next(filteredPosts));

filteredPosts$.subscribe(posts => postsContainer.innerHTML = convertPostsToMarkup(posts));

