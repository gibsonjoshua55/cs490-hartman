import { makeStyles } from '@material-ui/core';

const usePaperStyles = makeStyles( (theme) => {
    return({
      paper: {
        backgroundColor: theme.palette.primary.main,
        
        textAlign: 'center',
      }
    });
  })

export default usePaperStyles;