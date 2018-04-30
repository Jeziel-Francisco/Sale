import { Request, Response } from 'express';

import StateBusiness from './state.business';

class StateController {
    constructor() { }

    findById(req: Request, res: Response) {
        StateBusiness.findById(res, req.params.id);
    }

    create(req: Request, res: Response) {
        StateBusiness.create(res, req.body);
    }

    update(req: Request, res: Response) {
        StateBusiness.update(res, req.params.id, req.body);
    }
}

export default new StateController();