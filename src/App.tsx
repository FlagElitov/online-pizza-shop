import React, { useEffect, useState } from 'react';
import Header from './components/header/Header';
import Content from './components/content/Content';
import { Route } from 'react-router-dom';
import Carts from './components/carts/Carts';
import axios from 'axios';

let App = () => {

  const [pizzas, setPizzas] = useState([])

  useEffect(() => {

    axios('http://localhost:3000/db.json')
      .then(({ data }) => { setPizzas(data.pizzas) })
  }, [])


  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path='/' render={() => <Content items={pizzas} />} />
        <Route exact path='/carts' component={Carts} />
      </div>
    </div>
  );
}

export default App;
