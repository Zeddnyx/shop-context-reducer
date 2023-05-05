import React from 'react';
import { useCart } from './context';

function Cart() {
  const { state } = useCart();

  return (
    <div>
      <h2>Cart</h2>
      {state.items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {state.items.map(item => (
            <li key={item.id}>
              {item.title} - {item.price}
            </li>
          ))}
        </ul>
      )}
      <p>Total: {state.total}</p>
    </div>
  );
}

export default Cart;

