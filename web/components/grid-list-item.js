import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { GreekCard } from '../components/greek-card';
import { makeStyles } from '@material-ui/core';

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


export default (props) => {
    const classes = useStyles();
    const section = props.section;
    
    return(
        <div className={classes.root}>
            <GridList className={classes.gridList} cols={3.75} cellHeight="auto" spacing={10}>
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