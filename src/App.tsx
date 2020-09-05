import React from 'react';
import Header from './components/header/Header';
import Content from './components/content/Content';


let App = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Content />

      </div>
    </div>
  );
}

export default App;
