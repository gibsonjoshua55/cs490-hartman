import usePaperStyles from './styles/paper-styles';
import {Paper} from '@material-ui/core';

export default (props) => {
    const {sectionText} = props;
    const  classes = usePaperStyles();
    return( 
      <Paper className = {classes.paper}>
      
        <h2>{sectionText}</h2>

      </Paper>
    )
  }