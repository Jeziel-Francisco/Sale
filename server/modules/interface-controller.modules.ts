import { Request, Response } from 'express';

abstract class ControllerModules {
    business: any;

    constructor(business: any) {
        this.business = business;
    }

    findById(req: Request, res: Response) {
        this.business.findById(res, req.params.id);
    }

    create(req: Request, res: Response) {
        this.business.create(res, req.body);
    }

    update(req: Request, res: Response) {
        this.business.update(res, req.params.id, req.body);
    }

    remove(req: Request, res: Response) {

        this.business.remove(res, req.params.id);
    }
}

export default ControllerModules;