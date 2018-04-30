import { Strategy, StrategyOptions, ExtractJwt } from 'passport-jwt';

import CONFIG from './config/config';
import UserBusiness from './modules/user/user.business';

import * as passport from 'passport';


function AuthConfig() {

    let opts: StrategyOptions = {
        secretOrKey: CONFIG.secret,
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
    };

    passport.use(new Strategy(opts, (jwtPayload, done) => {
        UserBusiness
            .getByIdAuth(jwtPayload.id)
            .then((user) => {
                if (user) {
                    return done(null, {
                        id: user.id,
                        username: user.username
                    });
                }

                return done(null, false);
            })
            .catch((error) => done(error, null));
    }));

    return {
        initialize: () => passport.initialize(),
        authenticate: () => passport.authenticate('jwt', { session: false })
    };
}


export default AuthConfig;
