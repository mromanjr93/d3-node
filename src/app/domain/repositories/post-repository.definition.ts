import { BaseRepositoryInterface } from "../../shared/base/interfaces/base-repository.interface";

export abstract class PostRepositoryDefinition implements BaseRepositoryInterface{
    abstract getAll();
}