import { Card, CardContent, CardMedia, makeStyles, Typography, CardActionArea } from '@material-ui/core';
import Router from 'next/router';

const useStyles = makeStyles( (theme) => {
  return({
    card: {
      width: 350,
      height: 550,
      padding: 10,
      margin: 10,
      backgroundColor: theme.palette.secondary.main,
      borderRadius: 25,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      alignContent: "center",
      justifyContent: "center",
    },
    actionArea: {
      display: "flex",
      flexDirection: "column",
    },
    media: {
      height: 200,
      width: 200,
      display: "flex",
    },
    text: {
      padding: 10,
      textAlign: "center",
    },
    textDescrip: {
      backgroundColor: theme.palette.secondary.light,
      borderColor: "black",
      borderStyle: "solid",
      borderTopWidth: 0,
      borderWidth: 1,
      padding: 10,
      margin: 12,
      marginTop: 0,
      overflow: "scroll",
      maxHeight: 150,
    },
    titleContent: {
      backgroundColor: theme.palette.secondary.light,
      borderColor: "black",
      borderStyle: "solid",
      borderWidth: 1,
      paddingTop: 0,
      paddingBottom: 0,
      display: "flex",
      alignSelf: "stretch",
      borderRadius: 15,
      marginLeft: 40,
      marginRight: 40,
      maxHeight: 84,
      overflow: "hidden",
    },
    typeContent: {
      backgroundColor: theme.palette.secondary.light,
      borderColor: "black",
      borderStyle: "solid",
      borderWidth: 1,
      paddingTop: 0,
      paddingBottom: 0,
      display: "flex",
      alignSelf: "stretch",
      borderRadius: 15,
    },
    descripContent: {
      paddingTop: 0,
      paddingBottom: 0,
    },
  });
})
  
function testClickable(slug) {
  if (slug) {
    return(
      Router.push(`/card?slug=${slug.current}`)
    )
  } else {
    return(
      "return false"
    )
  }
}

export const GreekCard = (props) => {
  const classes = useStyles();
  const config = props.config;
  console.log(props);
  
  return (
    
    <Card
      className={classes.card}
    >
    <CardActionArea className={classes.actionArea} onClick={() => testClickable(config.slug)}>        
      <CardContent className={classes.titleContent} >
        <div className={classes.text} style={{margin: "auto"}}>
          <Typography variant="h5" component="h2" >
            {config.cardtitle}
          </Typography>
        </div>
      </CardContent>
      <CardMedia
        className={classes.media}
          image={config.image}
          title={config.title}
        />
        <CardContent className={classes.typeContent}>
          <div className={classes.text} >
              <Typography variant="h6" component="h2" >
              {config.cardType}
              </Typography>
          </div>
          </CardContent>
          <CardContent className={classes.descripContent}>
          <div className={classes.textDescrip}>
            <Typography  variant="body2" component="p" >
            {config.descrip}
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}