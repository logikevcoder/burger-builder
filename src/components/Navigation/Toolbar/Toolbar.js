import React from 'react';
import classes from './Toolbar.css';

const toolbar = (props) => {
  return (
    <header className={classes.Toolbar}>
      <button>Menu</button>
      <div>LOGO</div>
      <nav>
        ...
      </nav>
    </header>
  );
};

export default toolbar;