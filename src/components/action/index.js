import { ADD_ITEM, DELETE_ITEM, CHANGE_QUANTITY, INITIALIZE } from "./consts";
import api from "../api";
export const initialize = (customer) => {
  return {
    type: INITIALIZE,
    payload: customer,
  };
};
export const addItem = (item) => async (dispatch, getState) => {
  const a = item.item;
  await api.put(`/${a.id}`, {
    inventoryCount: a.inventoryCount - 1,
  });
  dispatch({
    type: ADD_ITEM,
    payload: item,
  });
};
export const deleteItem = (id) => async (dispatch, getState) => {
  const item = getState().cart.items.find(({ id: _id }) => _id === id.id);

  api.put(`/${id.id}`, {
    inventoryCount: item.inventoryCount + item.quantity,
  });
  dispatch({
    type: DELETE_ITEM,
    payload: id,
  });
};
export const changeQuantity =
  ({ id, sgin }) =>
  async (dispatch, getState) => {
    const i = getState().cart.items.find(({ id: _id }) => _id === id);
    await api.put(`/${id}`, {
      inventoryCount: i.inventoryCount - sgin,
    });
    dispatch({
      type: CHANGE_QUANTITY,
      payload: { id, sgin },
    });
  };
