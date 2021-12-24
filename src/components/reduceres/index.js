import { combineReducers } from "redux";
import {
  ADD_ITEM,
  DELETE_ITEM,
  CHANGE_QUANTITY,
  INITIALIZE,
} from "../action/consts";

let initialState = { customerId: null, items: [] };

const myReducer = (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case INITIALIZE:
      return { ...state, customerId: payload.id };

    case ADD_ITEM:
      const quantitys = state.items.find(({ id }) => id === payload.item.id);
      if (quantitys) {
        quantitys.quantity = quantitys.quantity + 1;
        return {
          items: [...state.items],
        };
      }
      return {
        items: [
          ...state.items,
          {
            ...payload.item,
            quantity: 1,
          },
        ],
      };
    case DELETE_ITEM:
      const newItems = state.items.filter(({ id }) => id !== payload.id);
      return {
        items: [...newItems],
      };
      case CHANGE_QUANTITY:
        const changeQuantity = state.items.find(({ id }) => id === payload.id);
        changeQuantity.quantity = changeQuantity.quantity + payload.sgin;
        return {
          items: [...state.items],
        };
   
    case "CLEAR":
      return initialState;

    default:
      return state;
  }
};
export default combineReducers({ cart: myReducer });
