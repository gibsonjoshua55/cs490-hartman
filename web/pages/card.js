import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import client from '../client';
import { GreekCard } from '../components/greek-card';
import Layout from '../components/Layout';
import { withRouter } from 'next/router';
import { typography, fontStyle, textAlign } from '@material-ui/system';
import {makeStyles} from '@material-ui/core';



const cardQuery = (slug) => `
  *[_type == "card" && slug.current == "${slug}"] {
    "imageUrl": image.asset->url,
    cardType->,
    ...
  }
`


const useStyles = makeStyles( (theme) => {
  return({
    box: {
      backgroundColor: theme.palette.primary.main,
    },
    
    
    
  });
})


//function to create background component
const Background = (props) => {
  const {backgroundText} = props;
  const  classes = useStyles();
  return( 
    <div className = {classes.box}>
      <h2>Card Background</h2>
      <p>{backgroundText}</p>
    </div>
  )
}

//function to create an instruction component
//includes if statement for display
const Vocabulary = (props) => {
  const {vocabText} = props;
  const  classes = useStyles();
  if (!props.vocabText)
  {
    return (
      <div/>
    ) 
  }
  else
  {
    return( 
    
        <div className = {classes.box}>
        <h2 className = {classes.h2}>Recommended Vocabulary</h2>
        <p>{vocabText}</p>
      </div>
  
    )
  }
}




//function to create narration or greek instruction component
const Narration = (props) => {
  const {narrationText} = props;
  const  classes = useStyles();
  return( 
    <div className = {classes.box}>
      <h2>Narration</h2>
      <p>{narrationText}</p>
    </div>
  )
}

//function to create greek phrase component 
const Phrase = (props) => {
  const {phraseText} = props;
  const  classes = useStyles();
  return( 
    <div className = {classes.box}>
      <p>{phraseText}</p>
    </div>
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
            
            <Background backgroundText={card.background} />
            <Vocabulary vocabText={card.vocab}/>
            <Narration narrationText={card.instructions} />
            <Phrase phraseText={card.phrase}/>

          </Grid>
          </Grid>
      </Layout>
    )
  }
}

export default withRouter(CardPage)
