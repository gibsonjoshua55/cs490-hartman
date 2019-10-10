import PropTypes from 'prop-types'
import React from 'react'
import Layout from '../components/Layout'
import { GreekCard } from '../components/greek-card';


class IndexPage extends React.Component {
  static propTypes = {
    config: PropTypes.object
  }

  render () {
    const {config} = this.props;

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
