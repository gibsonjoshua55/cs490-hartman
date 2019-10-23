import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export default function SortMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" variant="contained" color="secondary" onClick={handleClick}>
        Sort
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <RadioGroup aria-label="gender" name="gender1" >
            <MenuItem >
                <FormControlLabel value="card" control={<Radio />} label="Card Type" />
            </MenuItem>
            <MenuItem >
                <FormControlLabel value="alpha" control={<Radio />} label="A to Z" />
            </MenuItem>
            <MenuItem >
                <FormControlLabel value="reverseAlpha" control={<Radio />} label="Z to A" />
            </MenuItem>
        </RadioGroup>

        <MenuItem onClick={handleClose}>Close</MenuItem>

      </Menu>
    </div>
  );
}