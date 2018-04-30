import { Request, Response } from 'express';

import ClientBusiness from './client.business';

class ClientController {
    constructor() { }

    findById(req: Request, res: Response): void {
        ClientBusiness.findById(res, req.params.id);
    }

    create(req: Request, res: Response): void {
        ClientBusiness.create(res, req.body);
    }

    update(req: Request, res: Response): void {
        ClientBusiness.update(res, req.params.id, req.body);
    }

    remove(req: Request, res: Response): void {
        ClientBusiness.remove(res, req.params.id);
    }
}

export default new ClientController();