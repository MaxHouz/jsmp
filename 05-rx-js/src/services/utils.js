import { map } from "rxjs/operators";
import { fromPromise } from "rxjs/internal-compatibility";
import { Post } from "../models/post.model";

const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

export function loadPosts() {
    const promise = fetch(POSTS_URL).then(response => response.json());

    return fromPromise(promise)
        .pipe(
            map(data => data.map(
                post => new Post(
                    post.userId,
                    post.id,
                    post.title,
                    post.body
                )))
        );
}

export function convertPostsToMarkup(posts) {
    return posts.reduce((acc, cur) =>
        `${acc}
            <div>
                <h2>${cur.title}</h2>
                <p>${cur.body}</p>
            </div>`, '');
}

export function filterPosts(query, posts) {
    return posts.filter(post => post.title.includes(query));
}
