import { PostRepositoryDefinition } from "../domain/repositories/post-repository.definition";
import { injectable } from "inversify";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { PostFilter } from "../domain/filters/post-filter.domain";
import { Post } from "../domain/entities/post.domain";

@injectable()
export class PostRepository implements PostRepositoryDefinition {

    getAll(filter: PostFilter) {
        const a = new Array<Post>();
        a.push({postId : 1, title : "asasas"});        
        return Observable.of(a);            
    }
}