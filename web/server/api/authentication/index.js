// request form sanity
const jwt = require('jsonwebtoken');
const client = require('../../../sanity-client');

const passwordQuery = `
  *[_id == "global-config"] {
   sitePassword
  }[0]
`

const secret = process.env.JWT_SECRET || 'default_secret';
module.exports =  (server) => {
  server.post('/api/authenticate', async (req, res, next) => {
    const result = await client.fetch(passwordQuery);
    const {sitePassword} = result;
    if (!sitePassword) {
      return res.status(500).end();
    }
    if (req.body && req.body.password === sitePassword) {
      const accessToken = await jwt.sign({}, secret);
      return res.status(200)
        .cookie('access_token', accessToken)
        .json({authenticated: true});
    }
    res.status(403);
    return res.json({authenticated: false});
  });
}
