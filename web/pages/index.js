import PropTypes from 'prop-types'
import React from 'react'
import Layout from '../components/Layout'


class IndexPage extends React.Component {
  static propTypes = {
    config: PropTypes.object
  }

  render () {
    const {config} = this.props

    return (
      <Layout
      config= {{
        title: "Test"
      }} >
        <h1> Here is some content</h1>
      </Layout>
    )

   /*return(
     <h1>Test</h1>
   )*/
  }
}

export default IndexPage
