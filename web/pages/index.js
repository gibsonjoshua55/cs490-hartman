import PropTypes from 'prop-types'
import React from 'react'
import Layout from '../components/Layout'
import { ShieldCard, AthenaCard, GreekCard } from '../components/greek-card';
import client from '../client';
import Grid from '@material-ui/core/Grid';

const cardQuery = `
  *[_type == "card"] {
    "imageUrl": image.asset->url,
    ...
  }
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

    const card = cards[0];
    console.log(card)
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
              <GreekCard 
                
                config={{
                  image: card.imageUrl,
                  title: card.title,
                  cardtitle: card.title,
                  descrip: card.description
                }}
              ></GreekCard>
              </Grid>
            )
          })}
          </Grid>
        }
      </Layout>
    )
  }
}

export default IndexPage
