//#region  Imports
import { IUserPermissions } from './user-permissions.model';
import { Response } from 'express';

import UserPermissionsService from './user-permissions.service';
import response from './../../api/responses/response.default';

import * as HttpStatus from 'http-status';
//#endregion

class UserPermissionsBusiness {
    constructor() { }

    //#region  FindById
    async findById(res: Response, id: number) {
        try {
            let data = await UserPermissionsService.findById(id);
            response(res, HttpStatus.OK, data);
        } catch (error) {
            response(res, HttpStatus.INTERNAL_SERVER_ERROR, error.message || error)
        }
    }
    //#endregion

    //#region  Create
    async create(res: Response, permissionsUser: IUserPermissions) {
        try {
            let data = await UserPermissionsService.create(permissionsUser);
            response(res, HttpStatus.OK, data);
        } catch (error) {
            response(res, HttpStatus.INTERNAL_SERVER_ERROR, error.message || error)
        }
    }
    //#endregion

    //#region  Update
    async update(res: Response, id: number, permissionsUser: IUserPermissions) {
        try {
            let data = await UserPermissionsService.update(id, permissionsUser);
            response(res, HttpStatus.OK, data);
        } catch (error) {
            response(res, HttpStatus.INTERNAL_SERVER_ERROR, error.message || error)
        }
    }
    //#endregion

    //#region Remove
    async remove(res: Response, id: number) {
        try {
            let data = await UserPermissionsService.remove(id);
            response(res, HttpStatus.OK, data);
        } catch (error) {
            response(res, HttpStatus.INTERNAL_SERVER_ERROR, error.message || error)
        }
    }
    //#endregion

}

export default new UserPermissionsBusiness();