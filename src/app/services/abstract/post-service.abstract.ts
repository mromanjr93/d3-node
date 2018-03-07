import { BaseServiceInterface } from "../../shared/base/interfaces/base-service.interface";
import { Post } from "../../domain/entities/post.domain";
import { PostFilter } from "../../domain/filters/post-filter.domain";
import { Observable } from "rxjs/Observable";

export abstract class PostServiceAbstract implements BaseServiceInterface<Post, PostFilter> {
    abstract getAll(filter: PostFilter): Observable<Array<Post>>;
}