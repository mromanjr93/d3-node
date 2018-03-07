import { PostServiceAbstract } from "./abstract/post-service.abstract";
import { injectable, inject } from "inversify";
import { TYPES } from "../cross-cutting/ioc/types";
import { PostRepositoryDefinition } from "../domain/repositories/post-repository.definition";
import { Observable } from "rxjs/Observable";
import { Post } from "../domain/entities/post.domain";
import { PostFilter } from "../domain/filters/post-filter.domain";

@injectable()
export class PostService implements PostServiceAbstract {

    constructor(
        @inject(TYPES.PostRepositoryDefinition) private postRepository: PostRepositoryDefinition
    ) {

    }

    getAll(filter: PostFilter): Observable<Array<Post>> {
        return this.postRepository
                    .getAll(filter)
                    .map(posts => {                        
                        return posts;
                    });
    }
}