import { Card, CardMedia, CardContent, makeStyles, Typography, CardActions, Button } from '@material-ui/core';
import { yellow } from '@material-ui/core/colors';

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

        <CardContent >
          <Typography gutterBottom variant="h5" component="h2">
            {config.cardtitle}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {config.descrip}
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