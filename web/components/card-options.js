import SortMenu from "./sort_menu";
import FilterMenu from "./filter_menu";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    alignContent: "left"
  },
  item: {
    marginLeft: 10,
    marginRight: 10
  }
}));

export const CardOptions = props => {
  const { onSortChange, sortDir, onFilterChange, cardSections } = props;
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.item}>
        <SortMenu
          onChange={onSortChange}
          dir={sortDir}
        ></SortMenu>
      </div>
      <div className={classes.item}>
        <FilterMenu
          cardSections={cardSections}
          onSortChange={onSortChange}
          onChange={filters => {
            const filterNames = Object.keys(filters);
            const selected = filterNames.filter(filter => filters[filter]);
            onFilterChange(selected);
          }}
        ></FilterMenu>
      </div>
    </div>
  );
};
