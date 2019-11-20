import SortMenu from "./sort_menu";
import FilterMenu from "./filter_menu";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  container: {
    margin: 10,
    display: "flex",
    alignContent: "left"
  },
  item: {
    marginLeft: 10,
    marginRight: 10
  }
}));

export const CardOptions = props => {
  const { onSortChange, sortDir} = props;
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.item}>
        <SortMenu
          onChange={onSortChange}
          dir={sortDir}
        ></SortMenu>
      </div>
    </div>
  );
};
