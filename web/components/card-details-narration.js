import usePaperStyles from './styles/paper-styles';
import {Paper} from '@material-ui/core';

export default (props) => {
    const {narrationText} = props;
    const  classes = usePaperStyles();
    return( 
      <Paper className = {classes.paper}>
        <h2>Narration</h2>
        <p>{narrationText}</p>
      </Paper>
    )
  }