import usePaperStyles from './styles/paper-styles';
import { Paper } from '@material-ui/core';

export default (props) => {
    const {backgroundText} = props;
    const  classes = usePaperStyles();
    return( 
      <Paper className = {classes.paper}>
        <h2>Card Background</h2>
        <p>{backgroundText}</p>
      </Paper>
    )
  }