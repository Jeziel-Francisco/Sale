import { Request, Response } from 'express';

import authFail from './../../api/responses/auth-fail';
import authSchema from './auth.schema';

class AuthMiddleware {
    constructor() { }

    security(req: Request, res: Response, next) {
        return authSchema.validate(req.body, (error, result) => {
            if (error) {
                return authFail(res, error.message || error);
            }
            next();
        });
    }
}

export default new AuthMiddleware();