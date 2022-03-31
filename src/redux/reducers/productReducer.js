import { SET_CLOTHS } from "../productTypes";

let initialState = {
  cloths: [],
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CLOTHS:
            console.log(action.payload)
            return{
                ...state,
                cloths:action.payload
            }
        default:
            return state;
    }
};
export default productReducer