"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nodemailer_1 = require("nodemailer");
var response_default_1 = require("./../../api/responses/response.default");
var HttpStatus = require("http-status");
var _ = require("lodash");
var MailBusiness = /** @class */ (function () {
    function MailBusiness() {
    }
    MailBusiness.prototype.sendMail = function (res, mail) {
        var transporter = nodemailer_1.createTransport(mail.smtpConfig);
        transporter
            .sendMail(mail.mailOptions)
            .then(_.partial(response_default_1.default, res, HttpStatus.OK))
            .catch(function (error) { return response_default_1.default(res, HttpStatus.BAD_REQUEST, error.message || error); });
    };
    return MailBusiness;
}());
exports.default = new MailBusiness();
