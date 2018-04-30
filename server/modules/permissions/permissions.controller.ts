import { Request, Response } from 'express';

import PermissionsBusiness from './permissions.business';

class PermissionsController {
    constructor() { }

    findById(req: Request, res: Response) {
        PermissionsBusiness.findById(res, req.params.id);
    }

    create(req: Request, res: Response) {
        PermissionsBusiness.create(res, req.body);
    }

    update(req: Request, res: Response) {
        PermissionsBusiness.update(res, req.params.id, req.body);
    }

    remove(req: Request, res: Response) {
        PermissionsBusiness.remove(res, req.params.id);
    }

}

export default new PermissionsController();