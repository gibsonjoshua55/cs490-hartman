import usePaperStyles from './styles/paper-styles'
import { Paper } from '@material-ui/core';

export default (props) => {
    const {vocabText} = props;
    const  classes = usePaperStyles();
    if (!props.vocabText)
    {
      return (
        <div/>
      ) 
    }
    else
    {
      return( 
      
          <Paper className = {classes.paper}>
          <h2 className = {classes.h2}>Recommended Vocabulary</h2>
          <p>{vocabText}</p>
        </Paper>
    
      )
    }
  }