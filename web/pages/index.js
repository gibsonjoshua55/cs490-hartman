import Grid from '@material-ui/core/Grid';
import { Input } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import client from '../client';
import { GreekCard } from '../components/greek-card';
import Layout from '../components/Layout';
import Link from 'next/link';
const cardQuery = (searchTerm) => `
  *[_type == "card" ${searchTerm ? `&& title match  "*${searchTerm}*"` : '' }] {
    "imageUrl": image.asset->url,
    ...
  }
`

class IndexPage extends React.Component {
  static propTypes = {
    config: PropTypes.object
  }

  constructor(props) {
    super(props)
    this.state = Object.assign({}, props);
  }

  static async getInitialProps () {
    // Add site config from sanity
    const cards = await client.fetch(cardQuery())
    return {cards};
  }

  async setSearchTerm(searchTerm) {
    const cards = await client.fetch(cardQuery(searchTerm));
    this.setState({cards});
  }

  render () {
    const {cards} = this.state;
    return (
      <Layout
      config= {{
        title: "Page Title yo"
      }} >
        <h1> Here is some content</h1>
        <Grid container spacing={3}>
        {
          cards.map( (card) => {
            return (
              <Grid item xs={12} md={6} lg={4} key={card.slug.current}>
                <Link href={`/card?slug=${card.slug.current}`}>
                  <a>
                    <GreekCard

                      config={{
                        image: card.imageUrl,
                        title: card.title,
                        cardtitle: card.title,
                        descrip: card.description
                      }}
                    ></GreekCard>
                  </a>
                </Link>
              </Grid>
            )
          })}
          </Grid>
      </Layout>
    )
  }
}

export default IndexPage
