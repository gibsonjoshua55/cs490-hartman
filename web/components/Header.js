import { withRouter } from 'next/router'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import styles from '../styles/header.module.css'
import Router from 'next/router';

function handleClick() {
    return(
      Router.push(`/`)
    )
}

export const Header = (props) => {
  const title = props.title;

  return (
    <div className={styles.header}>
      <div className={styles.upperThin}></div>
      <div className={styles.upperThick}></div>
      <Typography variant="h1" color="primary" style={{position: "sticky"}} onClick={handleClick}>
        {title}
      </Typography>
      <div className={styles.lowerThick}></div>
      <div className={styles.lowerThin}></div>
    </div>
  );
}


export default Header;
