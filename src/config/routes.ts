import { Application } from "express";
import { resolverContainer } from '../app/cross-cutting/ioc/inversify.config';
import { TYPES } from "../app/cross-cutting/ioc/types";
import "reflect-metadata";
import { PostRoutes } from "../app/controllers/post.routes";

class Routes {
    private postRoutes = new PostRoutes();
    initRoutes(app: Application) {
        console.log('Init Routes');
        this.postRoutes.prepareRoutes(app);
    }
}

export default new Routes();