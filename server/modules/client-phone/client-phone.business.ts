//#region  Imports
import { IClientPhone } from './client-phone.model';
import { Request, Response } from 'express';

import ClientPhoneService from './client-phone.service';
import response from './../../api/responses/response.default';

import * as HttpStatus from 'http-status';
//#endregion

class ClientPhoneBusiness {
    constructor() { }
    //#region  FindById
    async findById(res: Response, id: number) {
        try {
            let data = await ClientPhoneService.findById(id);
            response(res, HttpStatus.OK, data);
        } catch (error) {
            response(res, HttpStatus.INTERNAL_SERVER_ERROR, error.message || error)
        }
    }
    //#endregion

    //#region  Create
    async create(res: Response, phoneClient: IClientPhone) {
        try {
            let data = await ClientPhoneService.create(phoneClient);
            response(res, HttpStatus.OK, data);
        } catch (error) {
            response(res, HttpStatus.INTERNAL_SERVER_ERROR, error.message || error)
        }
    }
    //#endregion

    //#region  Update
    async update(res: Response, id: number, phoneClient: IClientPhone) {
        try {
            let data = await ClientPhoneService.update(id, phoneClient);
            response(res, HttpStatus.OK, data);
        } catch (error) {
            response(res, HttpStatus.INTERNAL_SERVER_ERROR, error.message || error)
        }
    }
    //#endregion

    //#region  Remove
    async remove(res: Response, id: number) {
        try {
            let data = await ClientPhoneService.remove(id);
            response(res, HttpStatus.OK, data);
        } catch (error) {
            response(res, HttpStatus.INTERNAL_SERVER_ERROR, error.message || error)
        }
    }
    //#endregion
}

export default new ClientPhoneBusiness();