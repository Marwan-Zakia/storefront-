import {ADD_ITEM, DELETE_ITEM, CHANGE_QUANTITY,INITIALIZE} from "./consts";
export const initialize = (customer) => {
  return {
    type: INITIALIZE,
    payload: customer,
  };
};
  export const addItem = (item) => {
    return {
      type: ADD_ITEM,
      payload: item,
    };
  };
  export const deleteItem = (id) => {
    return {
      type: DELETE_ITEM,
      payload: id,
    };
  }
  export const changeQuantity = ({id,sgin}) => {
    return {
      type: CHANGE_QUANTITY,
      payload: {id,sgin},
    };
  }



