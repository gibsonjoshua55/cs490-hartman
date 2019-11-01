const sanityClient = require('@sanity/client')
const client = sanityClient({
  projectId: '6tjtr7cr',
  dataset: 'production',
  token: process.env.API_KEY, // or leave blank to be anonymous user
  useCdn: false // `false` if you want to ensure fresh data
})

module.exports = client
