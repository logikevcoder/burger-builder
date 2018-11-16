import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems'

const toolbar = (props) => {
  return (
    <header className={classes.Toolbar}>
      <button>Menu</button>
      <Logo />
      <nav>
        <NavItems />
      </nav>
    </header>
  );
};

export default toolbar;