import usePaperStyles from './styles/paper-styles'
import { Paper } from '@material-ui/core';

export default (props) => {
    const {phraseText} = props;
    const  classes = usePaperStyles();
    return( 
      <Paper className = {classes.paper}>
        <p>{phraseText}</p>
      </Paper>
    )
  }