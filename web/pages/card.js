import { makeStyles, Paper, Typography,  } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { withRouter } from 'next/router';
import PropTypes from 'prop-types';
import React from 'react';
import client from '../client';
import CardDetailsBackground from '../components/card-details-background';
import CardDetailsNarration from '../components/card-details-narration';
import CardDetailsVocabulary from '../components/card-details-vocabulary';
import CardDetailsPhrase from '../components/card-details-phrase';
import { GreekCard } from '../components/greek-card';
import Layout from '../components/Layout';

const cardQuery = (slug) => `
  *[_type == "card" && slug.current == "${slug}"] {
    "imageUrl": image.asset->url,
    cardType->,
    ...
  }
`

//outlines styles used in this file
const useStyles = makeStyles( (theme) => {
  return({
    //style for the next button
    nextbutton: {
      margin: theme.spacing(1),
      fontSize: 'large',
      color: theme.palette.secondary.main,
      position: 'absolute',
      top: '40%',
      right: '10%',
    },
    //style for the backbutton
    backbutton:{
      margin: theme.spacing(1),
      fontSize: 'large',
      color: theme.palette.secondary.main,
      position: 'absolute',
      top: '40%',
      left: '10%'
    }
  });
})

//creates the backbutton function on the page
const BackButton = () => {
  const classes = useStyles();
  return(
    <IconButton className={classes.backbutton}  aria-label="previous card"  >
      <NavigateBeforeIcon 
        fontSize = 'large'
        //position="absolute"
        />
    </IconButton>
  )
}

//creates the nextbutton function on the page
const NextButton = () => {
  const classes = useStyles();
  return(
    <IconButton className={classes.nextbutton} aria-label="next card" >
      <NavigateNextIcon 
        fontSize = 'large' 
        />
    </IconButton>
  )
}


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
      }}  >
        
        <Grid 
          container spacing={3}
          container direction="row"
          justify="center"
          alignItems="center" >
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
          <Grid item xs = {12} md={6} lg={4}>

            
            <CardDetailsBackground backgroundText={card.background} />
            <CardDetailsVocabulary vocabText={card.vocab}/>
            <CardDetailsNarration narrationText={card.instructions} />
            <CardDetailsPhrase phraseText={card.phrase}/>

          </Grid>

        </Grid>
        
        
        <BackButton />
        <NextButton />
          
          
      </Layout>
    )
  }
}

export default withRouter(CardPage)
