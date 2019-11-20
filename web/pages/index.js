import PropTypes from 'prop-types';
import React from 'react';
import client from '../client';
import { CardOptions } from '../components/card-options';
import Layout from '../components/Layout';
import SearchAppBar from '../components/search_bar';
import { cardFetchAll } from '../queries/cardFetchAll';
import GridListItem from '../components/grid-list-item';
import {Typography} from '@material-ui/core';

const cardSectionsQuery = `
*[_type == "card-section" ]{
  section
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
    const cardSections = (await client.fetch(cardSectionsQuery)).map(cardSection => cardSection.section);
    const sections = [];
    for (const sectionName of cardSections) {
      const section = { name: sectionName};
      console.log(sectionName);
      const cards = (await client.fetch(cardFetchAll({filterTypes: [sectionName]})));
      section.cards = cards;
      sections.push(section);
    }
    console.log(sections);
    return {cards, cardSections, sections};
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
    const {cards, cardSections, options, sections} = this.state;
    // sections is an array of section elements
    // section.name and section.cards
    return (
      <Layout
      config= {{
        title: "Enchiridion"
      }} >
        <SearchAppBar onChange={e => this.setSearchTerm(e.target.value)}></SearchAppBar>

        <CardOptions
          cardSections={cardSections}
          onFilterChange={(filterTypes) => this.setFilterTypes(filterTypes)}
          onSortChange={(sortDir) => this.setDirChange(sortDir)}
          sortDir={options.sortDir}
        />
        <br></br>
          
        {
        sections.map( section => {
          return(
            <div>
            <Typography variant="h4" component="h2" >
              {section.name}
            </Typography>
            <GridListItem section={section} />
            </div>
          )
        })
        }

      </Layout>
    )
  }
}

export default IndexPage
