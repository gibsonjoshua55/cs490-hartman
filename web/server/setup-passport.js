var JwtStrategy = require('passport-jwt').Strategy;
const passport = require('passport');
var opts = {}
opts.jwtFromRequest = (req) => {
    var token = null;
    if (req && req.cookies)
    {
        token = req.cookies['access_token'];
    }
    return token;
};
opts.secretOrKey = process.env.JWT_SECRET;
module.exports = (app) => {
  app.use(passport.initialize());
  app.use(passport.session());
  passport.use(new JwtStrategy(opts, (_jwt_payload, done) => {
      return done(undefined, {});
  }));
}
