import { combineReducers } from "redux"
import { ADD_SHOE, REMOVE_SHOE } from "../actionTypes"

const initialState = {
    cart: {},
    amount: 0,
}

function cart(state = initialState, action) {
    switch (action.type) {
        case ADD_SHOE: {
            const shoe = action.payload.content
            const cartData = state.cart
            if (cartData[shoe.id]) {
                cartData[shoe.id].amount++
            } else {
                cartData[shoe.id] = {
                    amount: 1,
                    shoe: shoe,
                }
            }
            state.amount++
            return {
                ...state,
                cart: cartData,
            }
        }

        case REMOVE_SHOE: {
            const shoeId = action.payload.content
            const cartData = state.cart
            if (cartData[shoeId].amount > 1) {
                console.log("decrement")
                cartData[shoeId].amount--
            } else {
                console.log("remove")
                delete cartData[shoeId]
            }
            state.amount--
            return {
                ...state,
                cart: cartData,
            }
        }
        default:
            return state
    }
}

export default combineReducers({
    cart,
})
