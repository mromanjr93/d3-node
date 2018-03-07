import { PostRepositoryAbstract } from "../domain/repositories/post-repository.abstract";
import { injectable } from "inversify";
import { Observable } from 'rxjs/Observable';
import { fromPromise } from 'rxjs/observable/fromPromise';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { PostFilter } from "../domain/filters/post-filter.domain";
import { Post } from "../domain/entities/post.domain";


import sequelize from "./database/connection";
import { PostModel } from "./database/models/PostModel";

@injectable()
export class PostRepository implements PostRepositoryAbstract {

    constructor() {
        sequelize.addModels([PostModel]);
    }

    getAll(filter: PostFilter): Observable<Array<Post>> {
        return fromPromise(PostModel.findAll()).map(values => {
            let posts = new Array<Post>();
           
            values.forEach(value => {
                console.log('value', value);
                posts.push({
                    postId : value.postId,
                    title : value.title,       
                    content : `${value.postId} - ${value.title}`
                });
            });

            console.log('posts',posts);

            return posts;
        });
    }
}