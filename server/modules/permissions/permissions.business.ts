//#region  IMports
import { IPermissions } from './permissions.model';
import { Response } from 'express';

import PermissionsService from './permissions.service';
import response from './../../api/responses/response.default';

import * as HttpStatus from 'http-status';
//#endregion

class PermissionsBusiness {
    constructor() { }
    //#region  FindById
    async findById(res: Response, id: number) {
        try {
            let data = await PermissionsService.findById(id);
            response(res, HttpStatus, data);
        } catch (error) {
            response(res, HttpStatus.INTERNAL_SERVER_ERROR, error.message || error)
        }
    }
    //#endregion

    //#region  Create
    async create(res: Response, permissions: IPermissions) {
        try {
            let data = await PermissionsService.create(permissions);
            response(res, HttpStatus, data);
        } catch (error) {
            response(res, HttpStatus.INTERNAL_SERVER_ERROR, error.message || error)
        }
    }
    //#endregion

    //#region  Update
    async update(res: Response, id: number, permissions: IPermissions) {
        try {
            let data = await PermissionsService.update(id, permissions);
            response(res, HttpStatus, data);
        } catch (error) {
            response(res, HttpStatus.INTERNAL_SERVER_ERROR, error.message || error)
        }
    }
    //#endregion

    //#region  remove
    async remove(res: Response, id: number) {
        try {
            let data = await PermissionsService.remove(id);
            response(res, HttpStatus, data);
        } catch (error) {
            response(res, HttpStatus.INTERNAL_SERVER_ERROR, error.message || error)
        }
    }
    //#endregion
}

export default new PermissionsBusiness();