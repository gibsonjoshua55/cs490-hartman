// request form sanity
const jwt = require('jsonwebtoken');
const password = process.env.WEBSITE_PASSWORD || 'default_password';
const secret = process.env.JWT_SECRET || 'default_secret';
module.exports =  (server) => {
  server.post('/api/authenticate', async (req, res, next) => {
    if (req.body && req.body.password === password) {
      const accessToken = await jwt.sign({}, secret);
      return res.status(200)
        .cookie('access_token', accessToken)
        .json({authenticated: true});
    }
    res.status(403);
    return res.json({authenticated: false});
  });
}
