import { BaseRoute } from "../shared/base/interfaces/base-routes.interface";
import { Application, Request, Response } from "express";

import { TYPES } from "../cross-cutting/ioc/types";
import { PostController } from "./post.controller"
import { resolverContainer } from '../cross-cutting/ioc/inversify.config';
import { PostAppServiceAbstract } from "../app-services/abstract/post-app-service.abstract";


export class PostRoutes implements BaseRoute {
    prepareRoutes(app: Application) {
        const postAppService = resolverContainer.get<PostAppServiceAbstract>(TYPES.PostAppServiceAbstract);
        const postController = new PostController(postAppService);
        
        
        app.route('/').get(postController.getAll);
    }   
}