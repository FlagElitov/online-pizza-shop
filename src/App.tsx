import React, { useEffect, useState } from 'react';
import Header from './components/header/Header';
import Content from './components/content/Content';
import { Route } from 'react-router-dom';
import Carts from './components/carts/Carts';


let App = () => {

  const [pizzas, setPizzas] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/db.json')
      .then((response) => response.json())
      .then((json) => { setPizzas(json.pizzas) })
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
