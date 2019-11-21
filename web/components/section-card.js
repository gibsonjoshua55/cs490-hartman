import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles({
  image: {
    height: 550,
    width: 350
  }
})

export const SectionCard = (props) => {
  const {imageUrl} = props;

  const classes = useStyles();
  return(
    <img src={imageUrl} className={classes.image} />
  )
}
