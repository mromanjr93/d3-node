import { Container } from "inversify";
import { TYPES } from "./types";
import { PostAppServiceAbstract } from "../../app-services/abstract/post-app-service.abstract";
import { PostAppService } from "../../app-services/post.app-service";
import { PostServiceAbstract } from "../../services/abstract/post-service.abstract";
import { PostService } from "../../services/post.service";
import { PostRepositoryDefinition } from "../../domain/repositories/post-repository.definition";
import { PostRepository } from "../../infrastructure/post.repository";

const resolverContainer = new Container();

resolverContainer.bind<PostAppServiceAbstract>(TYPES.PostAppServiceAbstract).to(PostAppService);
resolverContainer.bind<PostServiceAbstract>(TYPES.PostServiceAbstract).to(PostService);
resolverContainer.bind<PostRepositoryDefinition>(TYPES.PostRepositoryDefinition).to(PostRepository);

export { resolverContainer };
