"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var address_controller_1 = require("./../../modules/address/address.controller");
var city_controller_1 = require("./../../modules/city/city.controller");
var client_controller_1 = require("./../../modules/client/client.controller");
var client_address_controller_1 = require("./../../modules/client-address/client-address.controller");
var client_phone_controller_1 = require("./../../modules/client-phone/client-phone.controller");
var company_controller_1 = require("./../../modules/company/company.controller");
var company_address_controller_1 = require("./../../modules/company-address/company-address.controller");
var company_phone_controller_1 = require("./../../modules/company-phone/company-phone.controller");
var group_controller_1 = require("./../../modules/group/group.controller");
var permissions_controller_1 = require("./../../modules/permissions/permissions.controller");
var packing_controller_1 = require("./../../modules/packing/packing.controller");
var product_controller_1 = require("./../../modules/product/product.controller");
var product_group_controller_1 = require("./../../modules/product-group/product-group.controller");
var product_provider_controller_1 = require("./../../modules/product-provider/product-provider.controller");
var product_sale_controller_1 = require("./../../modules/product-sale/product-sale.controller");
var provider_controller_1 = require("./../../modules/provider/provider.controller");
var provider_address_controller_1 = require("./../../modules/provider-address/provider-address.controller");
var provider_phone_controller_1 = require("./../../modules/provider-phone/provider-phone.controller");
var receive_controller_1 = require("./../../modules/receive/receive.controller");
var receive_payment_controller_1 = require("./../../modules/receive-payment/receive-payment.controller");
var sale_controller_1 = require("./../../modules/sale/sale.controller");
var state_controller_1 = require("./../../modules/state/state.controller");
var token_routes_1 = require("./../../modules/auth/token-routes");
var type_document_controller_1 = require("./../../modules/type-document/type-document.controller");
var user_controller_1 = require("./../../modules/user/user.controller");
var user_permissions_controller_1 = require("./../../modules/user-permissions/user-permissions.controller");
var auth_middleware_1 = require("./../../modules/auth/auth.middleware");
//#endregion
var Routes = /** @class */ (function () {
    function Routes() {
    }
    Routes.prototype.routes = function (app, auth) {
        this._auth = auth;
        //#region Routes Auth
        app.route('/api/v1/auth').post(auth_middleware_1.default.security, token_routes_1.default.auth);
        app.route('/api/v1/auth/verify').all(this._auth.authenticate()).get(user_controller_1.default.verify);
        //#endRegion
        //#region Routes Address
        app.route('/api/v1/address/:id').all(this._auth.authenticate()).get(address_controller_1.default.findById);
        app.route('/api/v1/address').all(this._auth.authenticate()).post(address_controller_1.default.create);
        app.route('/api/v1/address/:id').all(this._auth.authenticate()).put(address_controller_1.default.update);
        app.route('/api/v1/address/:id').all(this._auth.authenticate()).delete(address_controller_1.default.remove);
        //#endRegion
        //#region Routes City
        app.route('/api/v1/city/:id').all(this._auth.authenticate()).get(city_controller_1.default.findById);
        app.route('/api/v1/city').all(this._auth.authenticate()).post(city_controller_1.default.create);
        app.route('/api/v1/city/:id').all(this._auth.authenticate()).put(city_controller_1.default.update);
        app.route('/api/v1/city/:id').all(this._auth.authenticate()).delete(city_controller_1.default.remove);
        //#endregion
        //region Routes Client
        app.route('/api/v1/client/:id').all(this._auth.authenticate()).get(client_controller_1.default.findById);
        app.route('/api/v1/client').all(this._auth.authenticate()).post(client_controller_1.default.create);
        app.route('/api/v1/client/:id').all(this._auth.authenticate()).put(client_controller_1.default.update);
        app.route('/api/v1/client/:id').all(this._auth.authenticate()).delete(client_controller_1.default.remove);
        //#endregion
        //region Routes Client-Address
        app.route('/api/v1/client-address/:id').all(this._auth.authenticate()).get(client_address_controller_1.default.findById);
        app.route('/api/v1/client-address').all(this._auth.authenticate()).post(client_address_controller_1.default.create);
        app.route('/api/v1/client-address/:id').all(this._auth.authenticate()).put(client_address_controller_1.default.update);
        app.route('/api/v1/client-address/:id').all(this._auth.authenticate()).delete(client_address_controller_1.default.remove);
        //#endregion
        //region Routes Client-Phone
        app.route('/api/v1/client-phone/:id').all(this._auth.authenticate()).get(client_phone_controller_1.default.findById);
        app.route('/api/v1/client-phone').all(this._auth.authenticate()).post(client_phone_controller_1.default.create);
        app.route('/api/v1/client-phone/:id').all(this._auth.authenticate()).put(client_phone_controller_1.default.update);
        app.route('/api/v1/client-phone/:id').all(this._auth.authenticate()).delete(client_phone_controller_1.default.remove);
        //#endregion
        //region Routes Company
        app.route('/api/v1/company/:id').all(this._auth.authenticate()).get(company_controller_1.default.findById);
        app.route('/api/v1/company/').all(this._auth.authenticate()).post(company_controller_1.default.create);
        app.route('/api/v1/company/:id').all(this._auth.authenticate()).put(company_controller_1.default.update);
        app.route('/api/v1/company/:id').all(this._auth.authenticate()).delete(company_controller_1.default.remove);
        //#endregion
        //region Routes CompanyAddresss
        app.route('/api/v1/company-address/:id').all(this._auth.authenticate()).get(company_address_controller_1.default.findById);
        app.route('/api/v1/company-address/').all(this._auth.authenticate()).post(company_address_controller_1.default.create);
        app.route('/api/v1/company-address/:id').all(this._auth.authenticate()).put(company_address_controller_1.default.update);
        app.route('/api/v1/company-address/:id').all(this._auth.authenticate()).delete(company_address_controller_1.default.remove);
        //#endregion
        //region Routes CompanyPhone
        app.route('/api/v1/company-phone/:id').all(this._auth.authenticate()).get(company_phone_controller_1.default.findById);
        app.route('/api/v1/company-phone/').all(this._auth.authenticate()).post(company_phone_controller_1.default.create);
        app.route('/api/v1/company-phone/:id').all(this._auth.authenticate()).put(company_phone_controller_1.default.update);
        app.route('/api/v1/company-phone/:id').all(this._auth.authenticate()).delete(company_phone_controller_1.default.remove);
        //#endregion
        //region Routes Group
        app.route('/api/v1/group/:id').all(this._auth.authenticate()).get(group_controller_1.default.findById);
        app.route('/api/v1/group/').all(this._auth.authenticate()).post(group_controller_1.default.create);
        app.route('/api/v1/group/:id').all(this._auth.authenticate()).put(group_controller_1.default.update);
        app.route('/api/v1/group/:id').all(this._auth.authenticate()).delete(group_controller_1.default.remove);
        //#endregion
        //region Routes Packing
        app.route('/api/v1/packing/:id').all(this._auth.authenticate()).get(packing_controller_1.default.findById);
        app.route('/api/v1/packing/').all(this._auth.authenticate()).post(packing_controller_1.default.create);
        app.route('/api/v1/packing/:id').all(this._auth.authenticate()).put(packing_controller_1.default.update);
        app.route('/api/v1/packing/:id').all(this._auth.authenticate()).delete(packing_controller_1.default.remove);
        //#endregion
        //region Routes Permissions
        app.route('/api/v1/permissions/:id').all(this._auth.authenticate()).get(permissions_controller_1.default.findById);
        app.route('/api/v1/permissions/').all(this._auth.authenticate()).post(permissions_controller_1.default.create);
        app.route('/api/v1/permissions/:id').all(this._auth.authenticate()).put(permissions_controller_1.default.update);
        app.route('/api/v1/permissions/:id').all(this._auth.authenticate()).delete(permissions_controller_1.default.remove);
        //#endregion
        //region Routes Product
        app.route('/api/v1/product/:id').all(this._auth.authenticate()).get(product_controller_1.default.findById);
        app.route('/api/v1/product').all(this._auth.authenticate()).post(product_controller_1.default.create);
        app.route('/api/v1/product/:id').all(this._auth.authenticate()).put(product_controller_1.default.update);
        app.route('/api/v1/product/:id').all(this._auth.authenticate()).delete(product_controller_1.default.remove);
        //#endregion
        //region Routes ProductGroup
        app.route('/api/v1/product-group/:id').all(this._auth.authenticate()).get(product_group_controller_1.default.findById);
        app.route('/api/v1/product-group').all(this._auth.authenticate()).post(product_group_controller_1.default.create);
        app.route('/api/v1/product-group/:id').all(this._auth.authenticate()).put(product_group_controller_1.default.update);
        app.route('/api/v1/product-group/:id').all(this._auth.authenticate()).delete(product_group_controller_1.default.remove);
        //#endregion
        //region Routes ProductProvider
        app.route('/api/v1/product-provider/:id').all(this._auth.authenticate()).get(product_provider_controller_1.default.findById);
        app.route('/api/v1/product-provider').all(this._auth.authenticate()).post(product_provider_controller_1.default.create);
        app.route('/api/v1/product-provider/:id').all(this._auth.authenticate()).put(product_provider_controller_1.default.update);
        app.route('/api/v1/product-provider/:id').all(this._auth.authenticate()).delete(product_provider_controller_1.default.remove);
        //#endregion
        //region Routes ProductSale
        app.route('/api/v1/product-sale/:id').all(this._auth.authenticate()).get(product_sale_controller_1.default.findById);
        app.route('/api/v1/product-sale').all(this._auth.authenticate()).post(product_sale_controller_1.default.create);
        app.route('/api/v1/product-sale/:id').all(this._auth.authenticate()).put(product_sale_controller_1.default.update);
        app.route('/api/v1/product-sale/:id').all(this._auth.authenticate()).delete(product_sale_controller_1.default.remove);
        //#endregion
        //region Routes Provider
        app.route('/api/v1/provider/:id').all(this._auth.authenticate()).get(provider_controller_1.default.findById);
        app.route('/api/v1/provider').all(this._auth.authenticate()).post(provider_controller_1.default.create);
        app.route('/api/v1/provider/:id').all(this._auth.authenticate()).put(provider_controller_1.default.update);
        app.route('/api/v1/provider/:id').all(this._auth.authenticate()).delete(provider_controller_1.default.remove);
        //#endregion
        //region Routes ProviderAddress
        app.route('/api/v1/provider-address/:id').all(this._auth.authenticate()).get(provider_address_controller_1.default.findById);
        app.route('/api/v1/provider-address').all(this._auth.authenticate()).post(provider_address_controller_1.default.create);
        app.route('/api/v1/provider-address/:id').all(this._auth.authenticate()).put(provider_address_controller_1.default.update);
        app.route('/api/v1/provider-address/:id').all(this._auth.authenticate()).delete(provider_address_controller_1.default.remove);
        //#endregion
        //region Routes ProviderPhone
        app.route('/api/v1/provider-phone/:id').all(this._auth.authenticate()).get(provider_phone_controller_1.default.findById);
        app.route('/api/v1/provider-phone').all(this._auth.authenticate()).post(provider_phone_controller_1.default.create);
        app.route('/api/v1/provider-phone/:id').all(this._auth.authenticate()).put(provider_phone_controller_1.default.update);
        app.route('/api/v1/provider-phone/:id').all(this._auth.authenticate()).delete(provider_phone_controller_1.default.remove);
        //#endregion
        //region Routes Receive
        app.route('/api/v1/receive/:id').all(this._auth.authenticate()).get(receive_controller_1.default.findById);
        app.route('/api/v1/receive').all(this._auth.authenticate()).post(receive_controller_1.default.create);
        app.route('/api/v1/receive/:id').all(this._auth.authenticate()).put(receive_controller_1.default.update);
        app.route('/api/v1/receive/:id').all(this._auth.authenticate()).delete(receive_controller_1.default.remove);
        //#endregion
        //region Routes ReceivePayment
        app.route('/api/v1/receive-payment/:id').all(this._auth.authenticate()).get(receive_payment_controller_1.default.findById);
        app.route('/api/v1/receive-payment').all(this._auth.authenticate()).post(receive_payment_controller_1.default.create);
        app.route('/api/v1/receive-payment/:id').all(this._auth.authenticate()).put(receive_payment_controller_1.default.update);
        app.route('/api/v1/receive-payment/:id').all(this._auth.authenticate()).delete(receive_payment_controller_1.default.remove);
        //#endregion
        //region Routes Sale
        app.route('/api/v1/sale/:id').all(this._auth.authenticate()).get(sale_controller_1.default.findById);
        app.route('/api/v1/sale').all(this._auth.authenticate()).post(sale_controller_1.default.create);
        app.route('/api/v1/sale/:id').all(this._auth.authenticate()).put(sale_controller_1.default.update);
        app.route('/api/v1/sale/:id').all(this._auth.authenticate()).delete(sale_controller_1.default.remove);
        //#endregion
        //region Routes TypeDocument
        app.route('/api/v1/type-document/:id').all(this._auth.authenticate()).get(type_document_controller_1.default.findById);
        app.route('/api/v1/type-document').all(this._auth.authenticate()).post(type_document_controller_1.default.create);
        app.route('/api/v1/type-document/:id').all(this._auth.authenticate()).put(type_document_controller_1.default.update);
        app.route('/api/v1/type-document/:id').all(this._auth.authenticate()).delete(type_document_controller_1.default.remove);
        //#endregion
        //region Routes State
        app.route('/api/v1/state/:id').all(this._auth.authenticate()).get(state_controller_1.default.findById);
        app.route('/api/v1/state/').all(this._auth.authenticate()).post(state_controller_1.default.create);
        app.route('/api/v1/state/:id').all(this._auth.authenticate()).put(state_controller_1.default.update);
        //#endregion
        //region Routes Users
        app.route('/api/v1/user').get(user_controller_1.default.findAll);
        app.route('/api/v1/user/:username').all(this._auth.authenticate()).get(user_controller_1.default.getByUsername);
        app.route('/api/v1/user').all(this._auth.authenticate()).post(user_controller_1.default.create);
        app.route('/api/v1/user/:id').all(this._auth.authenticate()).put(user_controller_1.default.update);
        app.route('/api/v1/user/password/:id').all(this._auth.authenticate()).put(user_controller_1.default.updatePassword);
        app.route('/api/v1/user/username/:id').all(this._auth.authenticate()).put(user_controller_1.default.updateUsername);
        //#endregion
        //region Routes UserPermissions
        app.route('/api/v1/user-permissions/:id').all(this._auth.authenticate()).get(user_permissions_controller_1.default.findById);
        app.route('/api/v1/user-permissions/').all(this._auth.authenticate()).post(user_permissions_controller_1.default.create);
        app.route('/api/v1/user-permissions/:id').all(this._auth.authenticate()).put(user_permissions_controller_1.default.update);
        app.route('/api/v1/user-permissions/:id').all(this._auth.authenticate()).delete(user_permissions_controller_1.default.remove);
        //#endregion
    };
    return Routes;
}());
exports.default = new Routes();
