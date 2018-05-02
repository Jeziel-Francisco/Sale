"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var passport_jwt_1 = require("passport-jwt");
var config_1 = require("./config/config");
var user_business_1 = require("./modules/user/user.business");
var passport = require("passport");
function AuthConfig() {
    var opts = {
        secretOrKey: config_1.default.secret,
        jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken()
    };
    passport.use(new passport_jwt_1.Strategy(opts, function (jwtPayload, done) {
        user_business_1.default
            .getByIdAuth(jwtPayload.id)
            .then(function (user) {
            if (user) {
                return done(null, {
                    id: user.id,
                    username: user.username
                });
            }
            return done(null, false);
        })
            .catch(function (error) { return done(error, null); });
    }));
    return {
        initialize: function () { return passport.initialize(); },
        authenticate: function () { return passport.authenticate('jwt', { session: false }); }
    };
}
exports.default = AuthConfig;
