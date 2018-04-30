import { Request, Response } from 'express';

import UserBusiness from './../user/user.business';
import authSuccess from './../../api/responses/auth-success';
import authFail from './../../api/responses/auth-fail';

class TokenRoutes {
    constructor() { }


    auth(req: Request, res: Response) {
        let credentials = {
            username: req.body.username,
            password: req.body.password
        };

        if ((credentials.hasOwnProperty('username')) && (credentials.hasOwnProperty('password'))) {
            UserBusiness.getByUsernameAuth(credentials.username)
                .then((user) => authSuccess(res, credentials, user))
                .catch((error) => authFail(res, error));
        }
    }

}

export default new TokenRoutes();