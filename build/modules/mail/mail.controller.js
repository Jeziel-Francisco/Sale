"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mail_business_1 = require("./mail.business");
var MailController = /** @class */ (function () {
    function MailController() {
    }
    MailController.prototype.sendMail = function (req, res) {
        mail_business_1.default.sendMail(res, req.body);
    };
    return MailController;
}());
exports.default = new MailController();
