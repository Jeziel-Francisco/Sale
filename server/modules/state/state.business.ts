//#region  Imports
import { IState } from './state.model';
import { Response } from 'express';

import StateService from './state.service';

import response from './../../api/responses/response.default';

import * as HttpStatus from 'http-status';
//#endregion

class StateBusiness {
    constructor() { }
    //#region  FindById
    async findById(res: Response, id: number) {
        try {
            let data = await StateService.findById(id);
            response(res, HttpStatus.OK, data);
        } catch (error) {
            response(res, HttpStatus.INTERNAL_SERVER_ERROR, error.message || error)
        }
    }
    //#endregion

    //#region  Create
    async create(res: Response, state: IState) {
        try {
            let data = await StateService.create(state);
            response(res, HttpStatus.OK, data);
        } catch (error) {
            response(res, HttpStatus.INTERNAL_SERVER_ERROR, error.message || error)
        }
    }
    //#endregion

    //#region  update
    async update(res: Response, id: number, state: IState) {
        try {
            let data = await StateService.update(id, state);
            response(res, HttpStatus.OK, data);
        } catch (error) {
            response(res, HttpStatus.INTERNAL_SERVER_ERROR, error.message || error)
        }
    }
    //#endregion
}

export default new StateBusiness();