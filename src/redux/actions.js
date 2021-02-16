import { ADD_SHOE, REMOVE_SHOE } from "./actionTypes"

export const addShoe = (content) => ({
    type: ADD_SHOE,
    payload: {
        content,
    },
})

export const removeShoe = (content) => ({
    type: REMOVE_SHOE,
    payload: {
        content,
    },
})
