import { withStyles } from '@material-ui/styles';
import React from 'react';

const styles = (theme) => {
  return({
    box: {
      width: 100,
      height: 100,
      backgroundColor: theme.palette.primary.light
    }
  });
}

class ExampleClassComponentNoStyle extends React.Component {
  render() {
    const {classes} = this.props;
    return(
      <div className={classes.box}>
        Hello!
      </div>
    )
  }
}

export const ExampleClassComponent = withStyles(styles)(ExampleClassComponentNoStyle);
