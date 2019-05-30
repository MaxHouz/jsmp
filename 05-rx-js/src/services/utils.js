import { HttpService as httpService } from "./http.service";
import { map } from "rxjs/operators";

export function loadPosts() {
    return httpService.getData('https://jsonplaceholder.typicode.com/posts').pipe(
        map((data) => convertPostsToMarkup(data))
    );
}

export function filterBySelector(query, parentElem) {
    parentElem.innerHTML = '';
    httpService.getData('https://jsonplaceholder.typicode.com/posts').pipe(
        map((data) => data.filter(
            post => post.title.includes(query)
        )),
        map((data) => convertPostsToMarkup(data))
    ).subscribe((markUp) => parentElem.innerHTML = markUp);
}


function convertPostsToMarkup(posts) {
    let postsMarkup = '';
    posts.forEach(post => {
        postsMarkup += `
                    <div>
                        <h2>${post.title}</h2>
                        <p>${post.body}</p>
                    </div>`;
    });
    return postsMarkup;
}
