//#region  Imports
import { IClient } from './client.model';
import { Response } from 'express';

import ClientService from './client.service';
import response from './../../api/responses/response.default';

import * as HttpStatus from 'http-status';
//#endregion

class ClientBusiness {
    constructor() { }
    //#region  FindById
    async findById(res: Response, id: number) {
        try {
            let data = await ClientService.findById(id);
            response(res, HttpStatus.OK, data);
        } catch (error) {
            response(res, HttpStatus.INTERNAL_SERVER_ERROR, error.message || error)
        }
    }
    //#endregion

    //#region  Create
    async create(res: Response, client: IClient) {
        try {
            let data = await ClientService.create(client);
            response(res, HttpStatus.OK, data);
        } catch (error) {
            response(res, HttpStatus.INTERNAL_SERVER_ERROR, error.message || error)
        }
    }
    //#endregion

    //#region  Update
    async update(res: Response, id: number, client: IClient) {
        try {
            let data = await ClientService.update(id, client);
            response(res, HttpStatus.OK, data);
        } catch (error) {
            response(res, HttpStatus.INTERNAL_SERVER_ERROR, error.message || error)
        }
    }
    //#endregion

    //#region  Remove
    async remove(res: Response, id: number) {
        try {
            let data = await ClientService.remove(id);
            response(res, HttpStatus.OK, data);
        } catch (error) {
            response(res, HttpStatus.INTERNAL_SERVER_ERROR, error.message || error)
        }
    }
    //#endregion
}

export default new ClientBusiness();