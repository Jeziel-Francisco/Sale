//#region Improts
import { IClientAddress } from './client-address.model';
import { Response } from "express";

import ClientAddressService from './client-address.service';
import response from './../../api/responses/response.default';

import * as HttpStatus from 'http-status';
//#endregion

class ClientAddressBusiness {
    constructor() { }

    //#region FindById
    async findById(res: Response, id: number) {
        try {
            let data = await ClientAddressService.findById(id);
            response(res, HttpStatus.OK, data);
        } catch (error) {
            response(res, HttpStatus.INTERNAL_SERVER_ERROR, error.message || error)
        }
    }
    //#endregion

    //#region  Create
    async create(res: Response, clientAddress: IClientAddress) {
        try {
            let data = await ClientAddressService.create(clientAddress);
            response(res, HttpStatus.OK, data);
        } catch (error) {
            response(res, HttpStatus.INTERNAL_SERVER_ERROR, error.message || error)
        }
    }
    //#endregion

    //#region  Create
    async update(res: Response, id: number, clientAddress: IClientAddress) {
        try {
            let data = await ClientAddressService.update(id, clientAddress);
            response(res, HttpStatus.OK, data);
        } catch (error) {
            response(res, HttpStatus.INTERNAL_SERVER_ERROR, error.message || error)
        }
    }
    //#endregion

    //#region  Create
    async remove(res: Response, id: number) {
        try {
            let data = await ClientAddressService.remove(id);
            response(res, HttpStatus.OK, data);
        } catch (error) {
            response(res, HttpStatus.INTERNAL_SERVER_ERROR, error.message || error)
        }
    }
    //#endregion
}

export default new ClientAddressBusiness();