import { addItemToCart, removeItem, totalItems } from "./cartFunctions";
import {
  ADD_ITEM_IN_CART,
  DELETE_ITEM_FROM_CART,
  REMOVE_ALL_ITEM,
  TOTAL_COUNT,
} from "./cartTypes";

const INITIAL_STATE = {
  cartItems: [],
  
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ITEM_IN_CART:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };

    case DELETE_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: removeItem(state.cartItems, action.payload),
      };

    case REMOVE_ALL_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id != action.payload.id
        ),
      };

    case TOTAL_COUNT:
      return {
        ...state,
        cartItems: totalItems(state.cartItems,action.payload)
      };

    default:
      return state;
  }
};

export default cartReducer;
