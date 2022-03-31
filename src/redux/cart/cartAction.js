import {
  ADD_ITEM_IN_CART,
  DELETE_ITEM_FROM_CART,
  REMOVE_ALL_ITEM,
  TOTAL_COUNT,
} from "./cartTypes";

export const additem = (item) => ({
  type: ADD_ITEM_IN_CART,
  payload: item,
});

export const deleteitem = (item) => ({
  type: DELETE_ITEM_FROM_CART,
  payload: item,
});

export const removeitems = (item) => ({
  type: REMOVE_ALL_ITEM,
  payload: item,
});

export const totalOfItems = (item) => ({
  type: TOTAL_COUNT,
  payload: item,
});
