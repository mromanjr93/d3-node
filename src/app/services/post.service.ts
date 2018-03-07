import { PostServiceAbstract } from "./abstract/post-service.abstract";
import { injectable, inject } from "inversify";
import { TYPES } from "../cross-cutting/ioc/types";
import { PostRepositoryDefinition } from "../domain/repositories/post-repository.definition";

@injectable()
export class PostService implements PostServiceAbstract {

    constructor(
        @inject(TYPES.PostRepositoryDefinition) private postRepository: PostRepositoryDefinition
    ) {

    }

    getAll() {
        return this.postRepository.getAll();
    }
}