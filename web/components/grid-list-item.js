import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { GreekCard } from '../components/greek-card';
import { makeStyles, withWidth } from '@material-ui/core';
import { isWidthUp } from '@material-ui/core/withWidth';

const useStyles = makeStyles( (theme) => {
    return({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            overflow: 'hidden',
          },
          gridList: {
            flexWrap: 'nowrap',
            // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
            transform: 'translateZ(0)',
          },
    });
})


const GridListItem = (props) => {
    const classes = useStyles();
    const section = props.section;

    const getGridListCols = () => {
        if (isWidthUp('xl', props.width)) {
          return 3.75;
        }
    
        if (isWidthUp('lg', props.width)) {
          return 3.75;
        }
    
        if (isWidthUp('md', props.width)) {
          return 2.75;
        }

        if (isWidthUp('sm', props.width)) {
            return 1.5;
          }
    
        return 1.25;
      }
    let numItems = getGridListCols();
    if (numItems > section.cards.length ) {
        numItems = section.cards.length;
    }
    return(
        <div className={classes.root}>
            
            <GridList className={classes.gridList} cols={numItems} cellHeight="auto" spacing={10}>
                {section.cards.map( card => {
                    return (
                        <GridListTile  key={card.slug.current} >
                            <GreekCard
                                config={{
                                    image: card.imageUrl,
                                    title: card.title,
                                    cardtitle: card.title,
                                    descrip: card.description,
                                    cardType: card.cardType.type,
                                    slug: card.slug
                                }}
                            ></GreekCard>
                        </GridListTile>
                    )
                })}
            </GridList>
        </div>
     )
}

export default withWidth()(GridListItem)