"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var response_default_1 = require("./../../api/responses/response.default");
var user_service_1 = require("./user.service");
var HttpStatus = require("http-status");
//#endregion
var UserBusiness = /** @class */ (function () {
    function UserBusiness() {
    }
    //#region  Verify
    UserBusiness.prototype.verify = function (res) {
        response_default_1.default(res, HttpStatus.OK, 'Token Access Valid');
    };
    //#endregion
    //#region  FindAll
    UserBusiness.prototype.findAll = function (res) {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, user_service_1.default.findAll()];
                    case 1:
                        data = _a.sent();
                        response_default_1.default(res, HttpStatus.OK, data);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        response_default_1.default(res, HttpStatus.INTERNAL_SERVER_ERROR, error_1.message || error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    //#endregion
    //#region  GetByUsername
    UserBusiness.prototype.getByUsername = function (res, username) {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, user_service_1.default.getByUsername(username)];
                    case 1:
                        data = _a.sent();
                        response_default_1.default(res, HttpStatus.OK, data);
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        response_default_1.default(res, HttpStatus.INTERNAL_SERVER_ERROR, error_2.message || error_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    //#endregion
    //#region  Create
    UserBusiness.prototype.create = function (res, user) {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, user_service_1.default.create(user)];
                    case 1:
                        data = _a.sent();
                        response_default_1.default(res, HttpStatus.OK, data);
                        return [3 /*break*/, 3];
                    case 2:
                        error_3 = _a.sent();
                        response_default_1.default(res, HttpStatus.INTERNAL_SERVER_ERROR, error_3.message || error_3);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    //#endregion
    //#region  Update
    UserBusiness.prototype.update = function (res, id, user) {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, user_service_1.default.update(id, user)];
                    case 1:
                        data = _a.sent();
                        response_default_1.default(res, HttpStatus.OK, data);
                        return [3 /*break*/, 3];
                    case 2:
                        error_4 = _a.sent();
                        response_default_1.default(res, HttpStatus.INTERNAL_SERVER_ERROR, error_4.message || error_4);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    //#endregion
    //#region  updatePassword
    UserBusiness.prototype.updatePassword = function (res, id, passwordUpdated) {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, user_service_1.default.updatePassword(id, passwordUpdated)];
                    case 1:
                        data = _a.sent();
                        response_default_1.default(res, HttpStatus.OK, data);
                        return [3 /*break*/, 3];
                    case 2:
                        error_5 = _a.sent();
                        response_default_1.default(res, HttpStatus.INTERNAL_SERVER_ERROR, error_5.message || error_5);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    //#endregion
    //#region  updateUsername
    UserBusiness.prototype.updateUsername = function (res, id, usernameUpdated) {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, user_service_1.default.updateUsername(id, usernameUpdated)];
                    case 1:
                        data = _a.sent();
                        response_default_1.default(res, HttpStatus.OK, data);
                        return [3 /*break*/, 3];
                    case 2:
                        error_6 = _a.sent();
                        response_default_1.default(res, HttpStatus.INTERNAL_SERVER_ERROR, error_6.message || error_6);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    //#endregion
    //#region  GetByAuth
    UserBusiness.prototype.getByIdAuth = function (id) {
        return user_service_1.default.getById(id);
    };
    //#endregion
    //#region  GetByUsernameAuth
    UserBusiness.prototype.getByUsernameAuth = function (username) {
        return user_service_1.default.getByUsername(username);
    };
    return UserBusiness;
}());
exports.default = new UserBusiness();
