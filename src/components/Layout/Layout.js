import React from 'react';
import Aux from '../../aux/Aux';

const layout = ( props ) => {
  return (
    <Aux>
      <div>Toolbar, Side-drawer, backdrop</div>
      <main>
        {props.children}
      </main>
    </Aux>
  )
}

export default layout;