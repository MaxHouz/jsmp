import { fromPromise } from "rxjs/internal-compatibility";
import { map } from "rxjs/operators";
import { Post } from "../models/post.model";

export class HttpService {
    static getData(url) {
        const promise = fetch(url).then(response => response.json());

        return fromPromise(promise)
            .pipe(
                map((data) => data.map(
                    post => new Post(
                        post.userId,
                        post.id,
                        post.title,
                        post.body
                    )))
            );
    }
}
