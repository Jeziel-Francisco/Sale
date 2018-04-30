import { Request, Response } from 'express';

import AddressBusiness from './address.business';

class AddressController {
    constructor() { }

    findById(req: Request, res: Response) {
        AddressBusiness.findById(res, req.params.id);
    }

    create(req: Request, res: Response) {
        AddressBusiness.create(res, req.body);
    }

    update(req: Request, res: Response) {
        AddressBusiness.update(res, req.params.id, req.body);
    }

    remove(req: Request, res: Response) {
        AddressBusiness.remove(res, req.params.id);
    }

}

export default new AddressController();