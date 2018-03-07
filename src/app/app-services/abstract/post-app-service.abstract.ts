import { BaseAppServiceInterface } from "../../shared/base/interfaces/base-app-service.interface";
import { PostDto } from "../dto/post.dto";
import { PostFilterDto } from "../dto/filter/post-filter.dto";
import { Observable } from "rxjs/Observable";

export abstract class PostAppServiceAbstract implements BaseAppServiceInterface<PostDto, PostFilterDto> {
    abstract getAll(filter: PostFilterDto): Observable<Array<PostDto>>;
}