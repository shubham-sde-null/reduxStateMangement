import { ADD_TO_CART, REMOVE_TO_CART } from "../../constants";

// const initialState = [];
//actions are called internally in redux
export default function cardItems(state = [], action) {
    switch (action.type) {
        case ADD_TO_CART:
            //when we cliced on addToCart in the Home page then it called addToCartHandler function which has dispatch inside it so action got called and once action gets called so reducers also gets called in order to send the data to store, that's the reason we are able to get the data and type of action in console
            console.log("reducer", action);
            //I wanted to make array to access the length property that's the reason I am using array
            return [
                ...state,
                {
                    cardData: action.data,
                },
            ];
            // return {
            //     ...state,
            //     cardData: action.data,
            // };
        case REMOVE_TO_CART:
            state.pop();
            return [...state];
        default:
            return state;
    }
}