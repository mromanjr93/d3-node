import { PostAppServiceAbstract } from "./abstract/post-app-service.abstract";
import { injectable, inject } from "inversify";
import "reflect-metadata";

import { PostServiceAbstract } from "../services/abstract/post-service.abstract";
import { TYPES } from "../cross-cutting/ioc/types";

@injectable()
export class PostAppService implements PostAppServiceAbstract {

    constructor(
        @inject(TYPES.PostServiceAbstract) private postService : PostServiceAbstract
    ){}

    getAll() {
        return this.postService.getAll();
    }
}