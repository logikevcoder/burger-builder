import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Layout />
        <BurgerBuilder />        
      </div>
    );
  }
}

export default App;
