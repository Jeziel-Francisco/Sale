import { Request, Response } from 'express';

import ClientPhoneBusiness from './client-phone.business';

class ClientPhoneController {
    constructor() { }

    findById(req: Request, res: Response) {
        ClientPhoneBusiness.findById(res, req.params.id);
    }

    create(req: Request, res: Response) {
        ClientPhoneBusiness.create(res, req.body);
    }

    update(req: Request, res: Response) {
        ClientPhoneBusiness.update(res, req.params.id, req.body);
    }

    remove(req: Request, res: Response) {
        ClientPhoneBusiness.remove(res, req.params.id);
    }
}

export default new ClientPhoneController();