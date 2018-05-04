"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var interface_controller_modules_1 = require("../interface-controller.modules");
var type_document_business_1 = require("./type-document.business");
var TypeDocumentController = /** @class */ (function (_super) {
    __extends(TypeDocumentController, _super);
    function TypeDocumentController() {
        return _super.call(this, type_document_business_1.default) || this;
    }
    return TypeDocumentController;
}(interface_controller_modules_1.default));
exports.default = new TypeDocumentController();
