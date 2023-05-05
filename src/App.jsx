import React from 'react';
import ItemList from './ItemList';
import Cart from './Cart';
import { CartProvider } from './context';

function App() {
  return (
    <CartProvider>
      <ItemList />
      <Cart />
    </CartProvider>
  );
}

export default App;
