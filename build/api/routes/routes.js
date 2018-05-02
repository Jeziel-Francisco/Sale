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
var permissions_controller_1 = require("./../../modules/permissions/permissions.controller");
var token_routes_1 = require("./../../modules/auth/token-routes");
var state_controller_1 = require("./../../modules/state/state.controller");
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
        //region Routes Permissions
        app.route('/api/v1/permissions/:id').all(this._auth.authenticate()).get(permissions_controller_1.default.findById);
        app.route('/api/v1/permissions/').all(this._auth.authenticate()).post(permissions_controller_1.default.create);
        app.route('/api/v1/permissions/:id').all(this._auth.authenticate()).put(permissions_controller_1.default.update);
        app.route('/api/v1/permissions/:id').all(this._auth.authenticate()).delete(permissions_controller_1.default.remove);
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
