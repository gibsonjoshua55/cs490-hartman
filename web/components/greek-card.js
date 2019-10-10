import { Card, CardMedia, CardContent, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export const GreekCard = () => {
  const classes = useStyles();

  return (
    <Card
      className={classes.card}
    >
      <CardMedia
        className={classes.media}
          image="/static/card-image.png"
          title="Contemplative Reptile"
        />
        <CardContent>
          <h1> Test title</h1>
        </CardContent>
    </Card>
  )
}
