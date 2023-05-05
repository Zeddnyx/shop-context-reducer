import React from 'react';
import { useCart } from './context';

const items = [
  { id: 1, title: 'Item 1', price: 10 },
  { id: 2, title: 'Item 2', price: 20 },
  { id: 3, title: 'Item 3', price: 30 },
  { id: 4, title: 'Item 4', price: 40 }
];

function Item({ item }) {
  const { state, dispatch } = useCart();

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_ITEM', payload: item });
  };

  const handleRemoveFromCart = () => {
    dispatch({ type: 'REMOVE_ITEM', payload: item });
  };

  const isInCart = state.items.some(i => i.id === item.id);

  return (
    <div className='p-2 border rounded'>
      <h2>{item.title}</h2>
      <p>{item.price}</p>
      {isInCart ? (
        <button onClick={handleRemoveFromCart}>-</button>
      ) : (
        <button onClick={handleAddToCart}>+</button>
      )}
    </div>
  );
}

function ItemList() {
  return (
    <div>
      {items.map(item => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
}

export default ItemList;

