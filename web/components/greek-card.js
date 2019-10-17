import { Card, CardMedia, CardContent, makeStyles, Typography, CardActions, Button } from '@material-ui/core';
import { yellow } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

const useStyles = makeStyles({
  card: {
    maxWidth: 500,
    padding: 10,
    margin: 10,
    backgroundColor: yellow

  },
  media: {
    height: 500,
  },
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

export const GreekCard = (props) => {
  const classes = useStyles();
  const config = props.config;
  return (
    <Card
      className={classes.card}
    >
      <CardMedia
        className={classes.media}
          image={config.image}
          title={config.title}
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {config.cardtitle}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {config.descrip}
          </Typography>
          
        </CardContent>
    </Card>
  )
}

export const ShieldCard = () => {
  const classes = useStyles();

  return (
    <Card
      className={classes.card}
    >
      <CardMedia
        className={classes.media}
          image="/static/shield_image.png"
          title="Contemplative Reptile"
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Shield
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          You find a shield in the bushes. It has clearly been used, but it is just as good as any other. 
          If you are about to lose a life, recite a paradigm (assigned by gamemaster). 
          Then roll a die. If you roll a 5-6 the shield protects you.
          </Typography>
          
        </CardContent>
    </Card>
  )
}

export const AthenaCard = () => {
  const classes = useStyles();

  return (
    <Card
      className={classes.card}
    >
      <CardMedia
        className={classes.media}
          image="/static/athena_image.png"
          title="Contemplative Reptile"
        />

      <CardContent>
          <Typography gutterBottom variant="h5" component="h2" color="primary">
            Athena
          </Typography>
          <Typography variant="body2" color="secondary" component="p">
          Use this spell to deal 3 additional damage (added to STR) in combat with a player or monster. 
          This spell must contain an explicit subject, direct object, and main verb.
          </Typography>
          
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            <a href="https://www.google.com">Details</a>
          </Button>
        </CardActions>
    </Card>
  )
}
