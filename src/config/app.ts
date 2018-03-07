import * as express from 'express';
import { Application } from 'express';
import * as morgan from 'morgan';
import * as bodyParser from 'body-parser';
import  routes  from './routes';
import Handlers from './response/handlers';

class App {
    public express: Application;
    constructor() {
        this.express = express();
        this.middleware();
    }


    middleware(): void {
        this.express.use(morgan('dev'));
        this.express.use(bodyParser.urlencoded({ extended: true }));
        this.express.use(bodyParser.json());
        this.express.use(Handlers.errorHandlerApi);
        
        this.express.use((req, res, next) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        })
        this.router(this.express);
    }

    private router(app: Application): void {
        routes.initRoutes(app);
    }
}

export default new App().express;