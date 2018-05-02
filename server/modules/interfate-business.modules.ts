import { Response } from 'express';

import response from './../api/responses/response.default';

import * as HttpStatus from 'http-status';

abstract class BusinessModules<Model> {
    service: any;
    constructor(
        service: any
    ) {
        this.service = service;
    }

    protected async findById(res: Response, id: number) {
        try {
            const data = await this.service.findById(id);
            response(res, HttpStatus.OK, data);
        } catch (error) {
            response(res, HttpStatus.INTERNAL_SERVER_ERROR, error.message || error)
        }
    }

    protected async create(res: Response, model: Model) {
        try {
            const data = await this.service.create(model);
            response(res, HttpStatus.OK, data);
        } catch (error) {
            response(res, HttpStatus.INTERNAL_SERVER_ERROR, error.message || error)
        }
    }

    protected async update(res: Response, id: number, model: Model) {
        try {
            const data = await this.service.update(id, model);
            response(res, HttpStatus.OK, data);
        } catch (error) {
            response(res, HttpStatus.INTERNAL_SERVER_ERROR, error.message || error)
        }
    }

    protected async remove(res: Response, id: number) {
        try {
            const data = await this.service.remove(id);
            response(res, HttpStatus.OK, data);
        } catch (error) {
            response(res, HttpStatus.INTERNAL_SERVER_ERROR, error.message || error)
        }
    }
}

export default BusinessModules;