import React from 'react';
import Header from './components/header/Header';
import Content from './components/content/Content';
import { Route } from 'react-router-dom';
import Carts from './components/carts/Carts';


let App = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path='/' component={Content} />
        <Route exact path='/carts' component={Carts} />
      </div>
    </div>
  );
}

export default App;
