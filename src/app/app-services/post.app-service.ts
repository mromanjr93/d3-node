import { PostAppServiceAbstract } from "./abstract/post-app-service.abstract";
import { injectable, inject } from "inversify";
import "reflect-metadata";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/finally';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/publishReplay';

import { PostServiceAbstract } from "../services/abstract/post-service.abstract";
import { TYPES } from "../cross-cutting/ioc/types";
import { PostFilterDto } from "./dto/filter/post-filter.dto";
import { PostDto } from "./dto/post.dto";

@injectable()
export class PostAppService implements PostAppServiceAbstract {

    
    constructor(
        @inject(TYPES.PostServiceAbstract) private postService : PostServiceAbstract
    ){}

    getAll(filter: PostFilterDto): Observable<Array<PostDto>>{
        return this.postService
                    .getAll(filter)
                    .map(value => {
                        let postDto = new Array<PostDto>();
                        
                        value.forEach(v => {
                            postDto.push({
                                postId : v.postId,
                                title: v.title,
                                content : v.content
                            });
                        })
                        return postDto;
                    });                
    }
}