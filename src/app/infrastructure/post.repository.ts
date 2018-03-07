import { PostRepositoryDefinition } from "../domain/repositories/post-repository.definition";
import { injectable } from "inversify";

@injectable()
export class PostRepository implements PostRepositoryDefinition {

    getAll() {
        return "repository";
    }
}