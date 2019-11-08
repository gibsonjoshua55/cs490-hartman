import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';

export default function FilterMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const filters = [
    {name: 'item', label:"Item Cards"},
    {name: 'spell', label:"Spell Cards"},
    {name: 'monster', label:"Monster Cards"},
    {name: 'event', label:"Event Cards"},
    {name: 'follower', label:"Follower Cards"}
  ]

  const {onChange} = props;

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
            filters.map(filter => (
              <MenuItem key={`filter-${filter.name}`}>
                <Checkbox value={filter.name} label={filter.label} />
                  {filter.label}
              </MenuItem>
            ))
        }
            <MenuItem onClick={handleClose}>Close</MenuItem>
      </Menu>
    </div>
  );
}
