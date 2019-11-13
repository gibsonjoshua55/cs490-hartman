import { makeStyles, Paper, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { withRouter } from "next/router";
import PropTypes from "prop-types";
import React from "react";
import client from "../client";
import CardDetailsBackground from "../components/card-details-background";
import CardDetailsNarration from "../components/card-details-narration";
import CardDetailsVocabulary from "../components/card-details-vocabulary";
import CardDetailsPhrase from "../components/card-details-phrase";
import CardDetailsSection from "../components/card-details-section";
import { GreekCard } from "../components/greek-card";
import Layout from "../components/Layout";
import Router from 'next/router';


const cardQuery = slug => `
  *[_type == "card" && slug.current == "${slug}"] {
    "imageUrl": image.asset->url,
    cardType->,
    cardSection->,
    ...
  }[0]
`;
const previousCardQuery = (title, section) => `
*[_type == "card" && title < "${title}" && cardSection->section == "${section}" ] | order(title desc) {
  "imageUrl": image.asset->url,
  cardType->,
  cardSection->,
  ...
}[0]`;

const nextCardQuery = (title, section) => `
*[_type == "card" && title > "${title}" && cardSection->section == "${section}" ] | order(title asc) {
  "imageUrl": image.asset->url,
  cardType->,
  ...
}[0]`;

//outlines styles used in this file
const useStyles = makeStyles(theme => {
  return {
    //style for the next button
    nextbutton: {
      margin: theme.spacing(1),
      fontSize: "large",
      color: theme.palette.secondary.main,
      position: "absolute",
      top: "40%",
      right: "10%",
      bottom: "auto",
      [theme.breakpoints.down("md")]: {
        top: "auto",
        bottom: "20",
        right: "40%"
      }
    },
    //style for the backbutton
    backbutton: {
      margin: theme.spacing(1),
      fontSize: "large",
      color: theme.palette.secondary.main,
      position: "absolute",
      top: "40%",
      left: "10%",
      [theme.breakpoints.down("md")]: {
        top: "auto",
        bottom: "20",
        left: "40%"
      }
    }
  };
});

//creates the backbutton function on the page
const BackButton = (props) => {
  const {onClick} = props;
  const classes = useStyles();
  return (
    <IconButton onClick={onClick} className={classes.backbutton} aria-label="previous card">
      <NavigateBeforeIcon fontSize="large" />
    </IconButton>
  );
};

//creates the nextbutton function on the page
const NextButton = (props) => {
  const {onClick} = props;
  const classes = useStyles();
  return (
    <IconButton onClick={onClick} className={classes.nextbutton} aria-label="next card">
      <NavigateNextIcon fontSize="large" />
    </IconButton>
  );
};

const changePage = card => {
  Router.push(`/card?slug=${card.slug.current}`)
};

class CardPage extends React.Component {
  static propTypes = {
    config: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.state = Object.assign({}, props);
  }

  static async getInitialProps({ query }) {
    // Add site config from sanity
    const queryStr = cardQuery(query.slug);
    const card = await client.fetch(queryStr);
    const prevQuery = previousCardQuery(card.title, card.cardSection.section);
    const previousCard = await client.fetch(prevQuery);
    const nextCard = await client.fetch(nextCardQuery(card.title, card.cardSection.section));
    return { card, previousCard, nextCard };
  }

  render() {
    const { card, previousCard, nextCard } = this.props;
    if (!card) {
      return <Typography variant={"h1"}>Card Not Found</Typography>;
    }
    return (
      <Layout
        config={{
          title: card.title
        }}
      >
        <Typography variant="h4" component="h2" >
              {card.cardSection.section}
        </Typography>
        <Grid container spacing={3} container direction="row" justify="center" alignItems="center">
          <Grid item xs={12} md={6} lg={4} key={card.slug.current}>
            <GreekCard
              config={{
                image: card.imageUrl,
                title: card.title,
                cardtitle: card.title,
                descrip: card.description,
                cardType: card.cardType.type
              }}
            ></GreekCard> 
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <CardDetailsSection sectionText={card.cardSection.section}/>
            <CardDetailsBackground backgroundText={card.background} />
            <CardDetailsVocabulary vocabText={card.vocab} />
            <CardDetailsNarration narrationText={card.instructions} />
            <CardDetailsPhrase phraseText={card.phrase} />
          </Grid>
        </Grid>

        {previousCard ? <BackButton  onClick={() => changePage(previousCard)}/> : <div />}
        {nextCard ? <NextButton onClick={() => changePage(nextCard)}/> : <div />}
      </Layout>
    );
  }
}

export default withRouter(CardPage);
