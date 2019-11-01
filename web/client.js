const axios = require('axios');
const client = require('./sanity-client');

class Client {
  async fetch(request) {
    if (process.browser) {
      const result = await axios.post('/api/sanity/fetch', {
        request
      });
      return result.data;
    }
    else {
      return await client.fetch(request);
    }
  }
}

module.exports = new Client();
