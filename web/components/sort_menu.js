import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export default function SortMenu(props) {
  const {dir, onChange} = props;
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
        <RadioGroup aria-label="gender" name="gender1" value={dir} onChange={(event) => onChange(event.target.value)}>
            <MenuItem >
                <FormControlLabel value="asc" control={<Radio />} label="A to Z" />
            </MenuItem>
            <MenuItem >
                <FormControlLabel value="desc" control={<Radio />} label="Z to A" />
            </MenuItem>
        </RadioGroup>

        <MenuItem onClick={handleClose}>Close</MenuItem>

      </Menu>
    </div>
  );
}
