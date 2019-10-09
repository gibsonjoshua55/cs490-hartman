import { withRouter } from 'next/router'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core';

export const Header = (props) => {
  const {title = 'Missing title'} = props;

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}


export default Header;
