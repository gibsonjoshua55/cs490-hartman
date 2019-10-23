import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';

export default function FilterMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
            <MenuItem >
                <Checkbox value="item" label="Item Cards" />
                Item Cards
            </MenuItem>
            <MenuItem >
              <Checkbox value="spell" label="Spell Cards" />
              Spell Cards
            </MenuItem>
            <MenuItem >
                <Checkbox value="monster" label="Monster Cards" />
                Monster Cards
            </MenuItem>
            <MenuItem >
                <Checkbox value="event" label="Events Cards" />
                Events Cards
            </MenuItem>
            <MenuItem >
                <Checkbox value="follower" label="Follower Cards" />
                Follower Cards
            </MenuItem>
            <MenuItem onClick={handleClose}>Close</MenuItem>
      </Menu>
    </div>
  );
}