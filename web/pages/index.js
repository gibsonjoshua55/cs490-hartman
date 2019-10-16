import PropTypes from 'prop-types'
import React from 'react'
import Layout from '../components/Layout'
import { GreekCard } from '../components/greek-card';
import client from '../client';

const cardQuery = `
  *[_type == "card"]
`

class IndexPage extends React.Component {
  static propTypes = {
    config: PropTypes.object
  }

  static async getInitialProps () {
    // Add site config from sanity
    return client.fetch(cardQuery).then(cards => {
      return {
        cards
      }
    })
  }

  render () {
    const {cards} = this.props;
    return (
      <Layout
      config= {{
        title: "A new Page"
      }} >
        <h1> Here is some content</h1>
        <GreekCard></GreekCard>
      </Layout>
    )
  }
}

export default IndexPage
