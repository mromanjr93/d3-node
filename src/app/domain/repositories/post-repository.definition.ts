import { BaseRepositoryInterface } from "../../shared/base/interfaces/base-repository.interface";
import { PostFilter } from "../filters/post-filter.domain";
import { Post } from "../entities/post.domain";
import { Observable } from "rxjs/Observable";

export abstract class PostRepositoryDefinition implements BaseRepositoryInterface<Post, PostFilter>{
    abstract getAll(filter: PostFilter): Observable<Array<Post>>;
}