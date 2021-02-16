import { combineReducers } from "redux"
import { ADD_SHOE, REMOVE_SHOE } from "../actionTypes"

const initialState = {
    cart: [],
}

function cart(state = initialState, action) {
    switch (action.type) {
        case ADD_SHOE: {
            const shoe = action.payload.content
            return {
                cart: [...state.cart, shoe],
            }
        }
        case REMOVE_SHOE:
            return
        default:
            return state
    }
}

export default combineReducers({
    cart,
})
