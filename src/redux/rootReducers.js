import { combineReducers } from "redux";
import { setCloths } from "./actions/productAction";
import cartReducer from "./cart/cartReducer";
import productReducer from "./reducers/productReducer";

const rootReducer = combineReducers({
    cloth:productReducer,
    cart:cartReducer
});

export default rootReducer;