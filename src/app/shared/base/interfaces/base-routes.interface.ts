import { Application } from "express";

export interface BaseRoute {
    prepareRoutes(app: Application);   
}