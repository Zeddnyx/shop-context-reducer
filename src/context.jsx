import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const initialState = {
  items: [],
  total: 0
};

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        items: [...state.items, action.payload],
        total: state.total + action.payload.price
      };
    case 'REMOVE_ITEM':
      const index = state.items.findIndex(item => item.id === action.payload.id);
      if (index >= 0) {
        const newItems = [...state.items];
        newItems.splice(index, 1);
        return {
          ...state,
          items: newItems,
          total: state.total - action.payload.price
        };
      }
      return state;
    default:
      return state;
  }
}

function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

export { CartProvider, useCart };
