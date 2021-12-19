import React from 'react';


let initialState = { customerId: null, items: [] };

export const myReducer = (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case 'INITIALIZE':
      return {customerId: payload.id};

    case 'ADD_ITEM':
      return { items: [...items, payload.item] };

    case 'CLEAR':
      return initialState;

    default:
      return state;
  }
};