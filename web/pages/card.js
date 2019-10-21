import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import client from '../client';
import { GreekCard } from '../components/greek-card';
import Layout from '../components/Layout';
import { withRouter } from 'next/router';

const cardQuery = (slug) => `
  *[_type == "card" && slug.current == "${slug}"] {
    "imageUrl": image.asset->url,
    ...
  }
`

class CardPage extends React.Component {
  static propTypes = {
    config: PropTypes.object
  }

  constructor(props) {
    super(props)
    this.state = Object.assign({}, props);
  }

  static async getInitialProps ({query}) {
    console.log(query);
    // Add site config from sanity
    const queryStr = cardQuery(query.slug);
    const cards = await client.fetch(queryStr);
    const card = cards[0];
    return {card};
  }

  render () {
    const {card} = this.props;
    if (!card) {
      return(<Typography variant={'h1'}>Card Not Found</Typography>)
    }
    return (
      <Layout
      config= {{
        title: "Page Title yo"
      }} >
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={4} key={card.slug.current}>
            <GreekCard

              config={{
                image: card.imageUrl,
                title: card.title,
                cardtitle: card.title,
                descrip: card.description
              }}
            ></GreekCard>
          </Grid>
          </Grid>
      </Layout>
    )
  }
}

export default withRouter(CardPage)
