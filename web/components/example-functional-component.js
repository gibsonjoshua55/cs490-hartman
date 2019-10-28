import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles( (theme) => {
  return({
    box: {
      width: 100,
      height: 100,
      backgroundColor: theme.palette.primary.light
    }
  });
})

export const ExampleFunctionalComponent = () => {
  const classes = useStyles();
  return(
    <div className={classes.box}>
      Hello!
    </div>
  )
}
