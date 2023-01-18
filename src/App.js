import React from 'react';
import Header from './components/header/Header';
import MenuList from './components/menulist/MenuList';
import CartProvider from './store/CartProvider';

const App = () => {
  return (
    <div className="box">
    <CartProvider>

      <Header />
      <MenuList />
    </CartProvider>
    </div>
  )
}

export default App;
