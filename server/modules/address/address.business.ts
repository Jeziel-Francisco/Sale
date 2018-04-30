//#region Imports
import { IAddress } from './address.model';
import { Response } from 'express';

import AddressService from './address.service';
import response from './../../api/responses/response.default';

import * as HttpStatus from 'http-status';
//#endregion

class AddressBusiness {
    constructor() { }
    //#region  FindByID
    async findById(res: Response, id: number) {
        try {
            let data = await AddressService.findById(id);
            response(res, HttpStatus.OK, data);
        } catch (error) {
            response(res, HttpStatus.INTERNAL_SERVER_ERROR, error.message || error)
        }
    }
    //#endregion

    //#region  Create
    async create(res: Response, address: IAddress) {
        try {
            let data = await AddressService.create(address);
            response(res, HttpStatus.OK, data);
        } catch (error) {
            response(res, HttpStatus.INTERNAL_SERVER_ERROR, error.message || error)
        }
    }
    //#endregion

    //#region  Update
    async update(res: Response, id: number, address: IAddress) {
        try {
            let data = await AddressService.update(id, address);
            response(res, HttpStatus.OK, data);
        } catch (error) {
            response(res, HttpStatus.INTERNAL_SERVER_ERROR, error.message || error)
        }
    }
    //#endregion

    //#region  Remove
    async remove(res: Response, id: number) {
        try {
            let data = await AddressService.remove(id);
            response(res, HttpStatus.OK, data);
        } catch (error) {
            response(res, HttpStatus.INTERNAL_SERVER_ERROR, error.message || error)
        }
    }
    //#endregion
}

export default new AddressBusiness();