import React from 'react';
import classes from './App.module.css';
import Header from './components/header/Header';
import MenuList from './components/menulist/MenuList';
const App = () => {
  return (
    <div className="box">
      <Header />
      <MenuList />
    </div>
  )
}

export default App;
