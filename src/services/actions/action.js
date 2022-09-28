import { ADD_TO_CART, REMOVE_TO_CART } from "../../constants";
export const addToCart = (data) => {
    //here when we click on the addItem button on the home page then data comes over here
    // console.log("action", data);
    return {
        type: ADD_TO_CART,
        data: data,
    };
};
export const removeToCart = () => {
    console.log("remove");
    return {
        type: REMOVE_TO_CART,
    };
};