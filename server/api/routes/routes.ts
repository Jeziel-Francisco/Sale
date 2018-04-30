//#region Imports
import { Application } from "express";

import Address from './../../modules/address/address.controller';

import City from './../../modules/city/city.controller';

import Client from './../../modules/client/client.controller';
import ClientAddress from './../../modules/client-address/client-address.controller';
import ClientPhone from './../../modules/client-phone/client-phone.controller';

import Company from './../../modules/company/company.controller';
import CompanyAddress from './../../modules/company-address/company-address.controller';
import CompanyPhone from './../../modules/company-phone/company-phone.controller';

import Permissions from './../../modules/permissions/permissions.controller'

import TokenRoutes from './../../modules/auth/token-routes';

import State from './../../modules/state/state.controller';

import User from './../../modules/user/user.controller';

import UserPermissions from './../../modules/user-permissions/user-permissions.controller';


import AuthMiddleware from './../../modules/auth/auth.middleware';
//#endregion

class Routes {

    private _auth: any;

    constructor() { }

    routes(app: Application, auth: any) {
        this._auth = auth;
        
        //#region Routes Auth
        app.route('/api/v1/auth').post(AuthMiddleware.security, TokenRoutes.auth);
        app.route('/api/v1/auth/verify').all(this._auth.authenticate()).get(User.verify);
        //#endRegion

        //#region Routes Address
        app.route('/api/v1/address/:id').all(this._auth.authenticate()).get(Address.findById);
        app.route('/api/v1/address').all(this._auth.authenticate()).post(Address.create);
        app.route('/api/v1/address/:id').all(this._auth.authenticate()).put(Address.update);
        app.route('/api/v1/address/:id').all(this._auth.authenticate()).delete(Address.remove);
        //#endRegion

        //#region Routes City
        app.route('/api/v1/city/:id').all(this._auth.authenticate()).get(City.findById);
        app.route('/api/v1/city').all(this._auth.authenticate()).post(City.create);
        app.route('/api/v1/city/:id').all(this._auth.authenticate()).put(City.update);
        app.route('/api/v1/city/:id').all(this._auth.authenticate()).delete(City.remove);
        //#endregion

        //region Routes Client
        app.route('/api/v1/client/:id').all(this._auth.authenticate()).get(Client.findById);
        app.route('/api/v1/client').all(this._auth.authenticate()).post(Client.create);
        app.route('/api/v1/client/:id').all(this._auth.authenticate()).put(Client.update);
        app.route('/api/v1/client/:id').all(this._auth.authenticate()).delete(Client.remove)
        //#endregion

        //region Routes Client-Address
        app.route('/api/v1/client-address/:id').all(this._auth.authenticate()).get(ClientAddress.findById);
        app.route('/api/v1/client-address').all(this._auth.authenticate()).post(ClientAddress.create);
        app.route('/api/v1/client-address/:id').all(this._auth.authenticate()).put(ClientAddress.update);
        app.route('/api/v1/client-address/:id').all(this._auth.authenticate()).delete(ClientAddress.remove)
        //#endregion

        //region Routes Client-Phone
        app.route('/api/v1/client-phone/:id').all(this._auth.authenticate()).get(ClientPhone.findById);
        app.route('/api/v1/client-phone').all(this._auth.authenticate()).post(ClientPhone.create);
        app.route('/api/v1/client-phone/:id').all(this._auth.authenticate()).put(ClientPhone.update);
        app.route('/api/v1/client-phone/:id').all(this._auth.authenticate()).delete(ClientPhone.remove)
        //#endregion

        //region Routes Company
        app.route('/api/v1/company/:id').all(this._auth.authenticate()).get(Company.findById);
        app.route('/api/v1/company/').all(this._auth.authenticate()).post(Company.create);
        app.route('/api/v1/company/:id').all(this._auth.authenticate()).put(Company.update);
        app.route('/api/v1/company/:id').all(this._auth.authenticate()).delete(Company.remove);
        //#endregion

        //region Routes CompanyAddresss
        app.route('/api/v1/company-address/:id').all(this._auth.authenticate()).get(CompanyAddress.findById);
        app.route('/api/v1/company-address/').all(this._auth.authenticate()).post(CompanyAddress.create);
        app.route('/api/v1/company-address/:id').all(this._auth.authenticate()).put(CompanyAddress.update);
        app.route('/api/v1/company-address/:id').all(this._auth.authenticate()).delete(CompanyAddress.remove);
        //#endregion

        //region Routes CompanyPhone
        app.route('/api/v1/company-phone/:id').all(this._auth.authenticate()).get(CompanyPhone.findById);
        app.route('/api/v1/company-phone/').all(this._auth.authenticate()).post(CompanyPhone.create);
        app.route('/api/v1/company-phone/:id').all(this._auth.authenticate()).put(CompanyPhone.update);
        app.route('/api/v1/company-phone/:id').all(this._auth.authenticate()).delete(CompanyPhone.remove);
        //#endregion

        //region Routes Permissions
        app.route('/api/v1/permissions/:id').all(this._auth.authenticate()).get(Permissions.findById);
        app.route('/api/v1/permissions/').all(this._auth.authenticate()).post(Permissions.create);
        app.route('/api/v1/permissions/:id').all(this._auth.authenticate()).put(Permissions.update);
        app.route('/api/v1/permissions/:id').all(this._auth.authenticate()).delete(Permissions.remove);
        //#endregion

        //region Routes State
        app.route('/api/v1/state/:id').all(this._auth.authenticate()).get(State.findById);
        app.route('/api/v1/state/').all(this._auth.authenticate()).post(State.create);
        app.route('/api/v1/state/:id').all(this._auth.authenticate()).put(State.update);
        //#endregion

        //region Routes Users

        app.route('/api/v1/user').get(User.findAll);
        app.route('/api/v1/user/:username').all(this._auth.authenticate()).get(User.getByUsername);
        app.route('/api/v1/user').all(this._auth.authenticate()).post(User.create);
        app.route('/api/v1/user/:id').all(this._auth.authenticate()).put(User.update);
        app.route('/api/v1/user/password/:id').all(this._auth.authenticate()).put(User.updatePassword);
        app.route('/api/v1/user/username/:id').all(this._auth.authenticate()).put(User.updateUsername);
        //#endregion

        //region Routes UserPermissions
        app.route('/api/v1/user-permissions/:id').all(this._auth.authenticate()).get(UserPermissions.findById);
        app.route('/api/v1/user-permissions/').all(this._auth.authenticate()).post(UserPermissions.create);
        app.route('/api/v1/user-permissions/:id').all(this._auth.authenticate()).put(UserPermissions.update);
        app.route('/api/v1/user-permissions/:id').all(this._auth.authenticate()).delete(UserPermissions.remove);
        //#endregion
    }
}

export default new Routes();