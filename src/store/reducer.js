import { SET_DATA } from './actionType'

const initialState = {};

export default function currencyApp(state = initialState, action) {
    switch (action.type) {
        case SET_DATA:
            return {
                ...state,
                currency: action.payload
            };
        default:
            return state;
    }
}

//SELECTORS

export const getCurrency = (state) => {
    console.log(state)
    return state.currency
}