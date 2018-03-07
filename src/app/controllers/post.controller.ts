import * as _ from 'lodash';
import { injectable, inject } from "inversify";
import "reflect-metadata";

import { TYPES } from '../cross-cutting/ioc/types';
import { PostAppServiceAbstract } from "../app-services/abstract/post-app-service.abstract";
import { Request, Response } from "express";


export class PostController {
    constructor(
        @inject(TYPES.PostAppServiceAbstract) private postAppService: PostAppServiceAbstract
    ) {
        this.postAppService = postAppService;
    }

    getAll = (req: Request, res: Response) => {
        const filter = req.query;
        this.postAppService.getAll(filter)
            .subscribe(response => res.json(response));        
    }
}

