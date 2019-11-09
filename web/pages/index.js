import Grid from '@material-ui/core/Grid';
import { Input, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import client from '../client';
import { GreekCard } from '../components/greek-card';
import Layout from '../components/Layout';
import Fab from '@material-ui/core/Fab';
import SortMenu from '../components/sort_menu';
import FilterMenu from '../components/filter_menu';
import SearchAppBar from '../components/search_bar';
import Link from 'next/link';
import { cardFetchAll } from '../queries/cardFetchAll';
import {CardOptions} from '../components/card-options';

const cardTypesQuery = `
*[_type == "card-type" ]{
  type
}`

class IndexPage extends React.Component {
  static propTypes = {
    config: PropTypes.object
  }

  constructor(props) {
    super(props)
    this.state = Object.assign({options: {sortDir: 'asc'}}, props);
  }

  static async getInitialProps () {
    // Add site config from sanity
    const query = cardFetchAll({});
    const cards = await client.fetch(query);
    const cardTypes = (await client.fetch(cardTypesQuery)).map(cardType => cardType.type);
    return {cards, cardTypes};
  }

  async setSearchTerm(searchTerm) {
    const {options} = this.state;
    options.searchTerm = searchTerm;
    const cards = await client.fetch(cardFetchAll(options));
    this.setState({cards, options});
  }

  async setFilterTypes(filterTypes) {
    const {options} = this.state;
    options.filterTypes = filterTypes;
    const query = cardFetchAll(options);
    const cards = await client.fetch(query);
    this.setState({cards, options});
  }

  async setDirChange(sortDir) {
    const {options} = this.state;
    options.sortDir = sortDir;
    const cards = await client.fetch(cardFetchAll(options));
    this.setState({cards, options});
  }

  render () {
    const {cards, cardTypes, options} = this.state;
    return (
      <Layout
      config= {{
        title: "Enchiridion"
      }} >
        <SearchAppBar onChange={e => this.setSearchTerm(e.target.value)}></SearchAppBar>

        <Typography variant="h1"> Here is some content</Typography>
        <CardOptions
          cardTypes={cardTypes}
          onFilterChange={(filterTypes) => this.setFilterTypes(filterTypes)}
          onSortChange={(sortDir) => this.setDirChange(sortDir)}
          sortDir={options.sortDir}
        />
        <br></br>
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
                        descrip: card.description,
                        cardType: card.cardType.type,
                        slug: card.slug
                      }}
                    ></GreekCard>
              </Grid>
            )
          })}
          </Grid>
      </Layout>
    )
  }
}

export default IndexPage
