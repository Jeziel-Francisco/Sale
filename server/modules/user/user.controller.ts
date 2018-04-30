import { Request, Response } from 'express';

import UserBusiness from './user.business';

class UserController {
    constructor() { }

    verify(req: Request, res: Response) {
        UserBusiness.verify(res);
    }

    findAll(req: Request, res: Response) {
        UserBusiness.findAll(res);
    }

    getByUsername(req: Request, res: Response) {
        UserBusiness.getByUsername(res, req.params.username);
    }

    create(req: Request, res: Response) {
        UserBusiness.create(res, req.body);
    }

    update(req: Request, res: Response) {
        UserBusiness.update(res, req.params.id, req.body);
    }

    updatePassword(req: Request, res: Response) {
        UserBusiness.updatePassword(res, req.params.id, req.body);
    }

    updateUsername(req: Request, res: Response) {
        UserBusiness.updateUsername(res, req.params.id, req.body);
    }

}

export default new UserController();