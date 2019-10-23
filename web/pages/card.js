import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import client from '../client';
import { GreekCard } from '../components/greek-card';
import Layout from '../components/Layout';
import { withRouter } from 'next/router';
import { typography } from '@material-ui/system';

const cardQuery = (slug) => `
  *[_type == "card" && slug.current == "${slug}"] {
    "imageUrl": image.asset->url,
    cardType->,
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
        title: card.title
      }} >
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={4} key={card.slug.current}>
            <GreekCard
              config={{
                image: card.imageUrl,
                title: card.title,
                cardtitle: card.title,
                descrip: card.description,
                cardType: card.cardType.type,
              }}
            ></GreekCard>
            <h2>Card Background</h2>
            <p>{card.background}</p>
            <h2>Greek Instructions</h2>
            <p>{card.instructions}</p>
            <h2>Greek Phrase</h2>
            <p>{card.phrase}</p>
          </Grid>
          </Grid>
      </Layout>
    )
  }
}

export default withRouter(CardPage)
