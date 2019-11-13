import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';

export default function FilterMenu(props) {
  const {onChange, cardSections} = props;

  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  const initialState = {};
  cardSections.forEach(cardType => initialState[cardType] = false);

  const [filterState, setFilterState] = React.useState(initialState);

  const onFilterChange = (newFilterState) => {
    setFilterState(newFilterState);
    onChange(newFilterState)
  }

  const handleMenuClick = (filterName) => () => {
    const currentState = filterState[filterName];
    const newState = Object.assign({}, filterState);
    newState[filterName] = !currentState;
    onFilterChange(newState);
  }

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" variant="contained" color="primary" onClick={handleClick}>
        Filter
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {
            cardSections.map(cardType => {
              return(<MenuItem key={`filter-${cardType}`} onClick={handleMenuClick(cardType)}>
                <Checkbox value={cardType} label={cardType} checked={filterState[cardType]} onChange={handleMenuClick(cardType)}  />
                  {cardType}
              </MenuItem>)
            })
        }
            <MenuItem onClick={handleClose}>Close</MenuItem>
      </Menu>
    </div>
  );
}
