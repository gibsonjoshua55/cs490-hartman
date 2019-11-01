// request form sanity
const client = require('../../../sanity-client');
const passport = require('passport');

module.exports =  (server) => {
  server.post('/api/sanity/fetch', passport.authenticate('jwt', {session: false}), async (req, res, next) => {
    try {
      const result = await client.fetch(req.body.request);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  });
}
