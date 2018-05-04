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

import Group from './../../modules/group/group.controller';

import Permissions from './../../modules/permissions/permissions.controller';

import Packing from './../../modules/packing/packing.controller';

import Product from './../../modules/product/product.controller';
import ProductGroup from './../../modules/product-group/product-group.controller';
import ProductProvider from './../../modules/product-provider/product-provider.controller';
import ProductSale from './../../modules/product-sale/product-sale.controller';

import Provider from './../../modules/provider/provider.controller';
import ProviderAddress from './../../modules/provider-address/provider-address.controller';
import ProviderPhone from './../../modules/provider-phone/provider-phone.controller';

import Receive from './../../modules/receive/receive.controller';
import ReceivePayment from './../../modules/receive-payment/receive-payment.controller';

import Sale from './../../modules/sale/sale.controller';

import State from './../../modules/state/state.controller';

import TokenRoutes from './../../modules/auth/token-routes';

import TypeDocument from './../../modules/type-document/type-document.controller';

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

        //region Routes Group
        app.route('/api/v1/group/:id').all(this._auth.authenticate()).get(Group.findById);
        app.route('/api/v1/group/').all(this._auth.authenticate()).post(Group.create);
        app.route('/api/v1/group/:id').all(this._auth.authenticate()).put(Group.update);
        app.route('/api/v1/group/:id').all(this._auth.authenticate()).delete(Group.remove);
        //#endregion

        //region Routes Packing
        app.route('/api/v1/packing/:id').all(this._auth.authenticate()).get(Packing.findById);
        app.route('/api/v1/packing/').all(this._auth.authenticate()).post(Packing.create);
        app.route('/api/v1/packing/:id').all(this._auth.authenticate()).put(Packing.update);
        app.route('/api/v1/packing/:id').all(this._auth.authenticate()).delete(Packing.remove);
        //#endregion

        //region Routes Permissions
        app.route('/api/v1/permissions/:id').all(this._auth.authenticate()).get(Permissions.findById);
        app.route('/api/v1/permissions/').all(this._auth.authenticate()).post(Permissions.create);
        app.route('/api/v1/permissions/:id').all(this._auth.authenticate()).put(Permissions.update);
        app.route('/api/v1/permissions/:id').all(this._auth.authenticate()).delete(Permissions.remove);
        //#endregion

        //region Routes Product
        app.route('/api/v1/product/:id').all(this._auth.authenticate()).get(Product.findById);
        app.route('/api/v1/product').all(this._auth.authenticate()).post(Product.create);
        app.route('/api/v1/product/:id').all(this._auth.authenticate()).put(Product.update);
        app.route('/api/v1/product/:id').all(this._auth.authenticate()).delete(Product.remove);
        //#endregion

        //region Routes ProductGroup
        app.route('/api/v1/product-group/:id').all(this._auth.authenticate()).get(ProductGroup.findById);
        app.route('/api/v1/product-group').all(this._auth.authenticate()).post(ProductGroup.create);
        app.route('/api/v1/product-group/:id').all(this._auth.authenticate()).put(ProductGroup.update);
        app.route('/api/v1/product-group/:id').all(this._auth.authenticate()).delete(ProductGroup.remove);
        //#endregion

        //region Routes ProductProvider
        app.route('/api/v1/product-provider/:id').all(this._auth.authenticate()).get(ProductProvider.findById);
        app.route('/api/v1/product-provider').all(this._auth.authenticate()).post(ProductProvider.create);
        app.route('/api/v1/product-provider/:id').all(this._auth.authenticate()).put(ProductProvider.update);
        app.route('/api/v1/product-provider/:id').all(this._auth.authenticate()).delete(ProductProvider.remove);
        //#endregion

        //region Routes ProductSale
        app.route('/api/v1/product-sale/:id').all(this._auth.authenticate()).get(ProductSale.findById);
        app.route('/api/v1/product-sale').all(this._auth.authenticate()).post(ProductSale.create);
        app.route('/api/v1/product-sale/:id').all(this._auth.authenticate()).put(ProductSale.update);
        app.route('/api/v1/product-sale/:id').all(this._auth.authenticate()).delete(ProductSale.remove);
        //#endregion

        //region Routes Provider
        app.route('/api/v1/provider/:id').all(this._auth.authenticate()).get(Provider.findById);
        app.route('/api/v1/provider').all(this._auth.authenticate()).post(Provider.create);
        app.route('/api/v1/provider/:id').all(this._auth.authenticate()).put(Provider.update);
        app.route('/api/v1/provider/:id').all(this._auth.authenticate()).delete(Provider.remove);
        //#endregion

        //region Routes ProviderAddress
        app.route('/api/v1/provider-address/:id').all(this._auth.authenticate()).get(ProviderAddress.findById);
        app.route('/api/v1/provider-address').all(this._auth.authenticate()).post(ProviderAddress.create);
        app.route('/api/v1/provider-address/:id').all(this._auth.authenticate()).put(ProviderAddress.update);
        app.route('/api/v1/provider-address/:id').all(this._auth.authenticate()).delete(ProviderAddress.remove);
        //#endregion

        //region Routes ProviderPhone
        app.route('/api/v1/provider-phone/:id').all(this._auth.authenticate()).get(ProviderPhone.findById);
        app.route('/api/v1/provider-phone').all(this._auth.authenticate()).post(ProviderPhone.create);
        app.route('/api/v1/provider-phone/:id').all(this._auth.authenticate()).put(ProviderPhone.update);
        app.route('/api/v1/provider-phone/:id').all(this._auth.authenticate()).delete(ProviderPhone.remove);
        //#endregion

        //region Routes Receive
        app.route('/api/v1/receive/:id').all(this._auth.authenticate()).get(Receive.findById);
        app.route('/api/v1/receive').all(this._auth.authenticate()).post(Receive.create);
        app.route('/api/v1/receive/:id').all(this._auth.authenticate()).put(Receive.update);
        app.route('/api/v1/receive/:id').all(this._auth.authenticate()).delete(Receive.remove);
        //#endregion

        //region Routes ReceivePayment
        app.route('/api/v1/receive-payment/:id').all(this._auth.authenticate()).get(ReceivePayment.findById);
        app.route('/api/v1/receive-payment').all(this._auth.authenticate()).post(ReceivePayment.create);
        app.route('/api/v1/receive-payment/:id').all(this._auth.authenticate()).put(ReceivePayment.update);
        app.route('/api/v1/receive-payment/:id').all(this._auth.authenticate()).delete(ReceivePayment.remove);
        //#endregion

        //region Routes Sale
        app.route('/api/v1/sale/:id').all(this._auth.authenticate()).get(Sale.findById);
        app.route('/api/v1/sale').all(this._auth.authenticate()).post(Sale.create);
        app.route('/api/v1/sale/:id').all(this._auth.authenticate()).put(Sale.update);
        app.route('/api/v1/sale/:id').all(this._auth.authenticate()).delete(Sale.remove);
        //#endregion

        //region Routes TypeDocument
        app.route('/api/v1/type-document/:id').all(this._auth.authenticate()).get(TypeDocument.findById);
        app.route('/api/v1/type-document').all(this._auth.authenticate()).post(TypeDocument.create);
        app.route('/api/v1/type-document/:id').all(this._auth.authenticate()).put(TypeDocument.update);
        app.route('/api/v1/type-document/:id').all(this._auth.authenticate()).delete(TypeDocument.remove);
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