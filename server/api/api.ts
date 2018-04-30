import { Application } from 'express';

import Routes from './routes/routes';
import AuthConfig from './../auth';

import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as express from 'express';
import * as morgan from 'morgan';

class Api {
    public express: Application;
    public auth: any;

    constructor() {
        this.express = express();
        this.auth = AuthConfig();
        this.middeware();
    }

    middeware(): void {
        this.express.use(morgan('dev'));
        this.express.use(bodyParser.urlencoded({ extended: true }));
        this.express.use(bodyParser.json());
        this.express.use(cors());
        this.express.use(this.auth.initialize())
        this.routes(this.express, this.auth);
    }

    routes(app: Application, auth: any): void {
        Routes.routes(app, auth);
    }
}

export default new Api().express;