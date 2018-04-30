import { Response, Request } from 'express';

import UserPermissionsBusiness from './user-permissions.business';

class UserPermissionsController {
    constructor() { }
    findById(req: Request, res: Response) {
        UserPermissionsBusiness.findById(res, req.params.id);
    }

    create(req: Request, res: Response) {
        UserPermissionsBusiness.create(res, req.body);
    }

    update(req: Request, res: Response) {
        UserPermissionsBusiness.update(res, req.params.id, req.body);
    }

    remove(req: Request, res: Response) {
        UserPermissionsBusiness.remove(res, req.params.id);
    }

}

export default new UserPermissionsController();