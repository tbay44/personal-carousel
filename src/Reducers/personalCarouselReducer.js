import {ADD_PRODUCT} from '../Actions/types';

const initialState = {
        products: [],
        pageOne : [],
        pageTwo : [],
        pageThree: []
}

export default function (state = initialState, action){
    switch(action.type) {
        case ADD_PRODUCT:
            return {
                ...state,
                products: action.payload,
                pageOne: action.pageOne,
                pageTwo: action.pageTwo,
                pageThree: action.pageThree
            }
        default:
            return state;
    }
}