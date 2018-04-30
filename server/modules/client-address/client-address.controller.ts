import { Request, Response } from "express";

import ClientAddressBusiness from './client-address.business';

class ClientAddressController {
    constructor() { }

    findById(req: Request, res: Response) {
        ClientAddressBusiness.findById(res, req.params.id);
    }

    create(req: Request, res: Response) {
        ClientAddressBusiness.create(res, req.body);
    }

    update(req: Request, res: Response) {
        ClientAddressBusiness.update(res, req.params.id, req.body);
    }

    remove(req: Request, res: Response) {
        ClientAddressBusiness.remove(res, req.params.id);
    }
}

export default new ClientAddressController();