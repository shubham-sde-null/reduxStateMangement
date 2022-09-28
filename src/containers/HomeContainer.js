import { connect } from "react-redux";
import { addToCart, removeToCart } from "../services/actions/action";
import Home from "../components/Home";
//here this is used to get the data from the store whereas below function is used to pass the data to the store
const mapStateToProps = (state) => ({
    //cardData is just a variable, and inside this variable we will get all the data present in state and that data will be the data we get in reducer from action, because reducer gives us final state after receiving the state and action type
    cardData: state.cardItems,
});
//this is used to send the data from component to the store because we use dispatch to send some actions
const mapDispatchToProps = (dispatch) => ({
    //what is happeing over here is we used to send actions through the dispatch, we are doing the same thing over here
    //here addToCartHandler is a function which takes an argument and then passes that argument to the addToCart actions, because action want some arguments to be passed
    addToCartHandler: (data) => dispatch(addToCart(data)),
    removeToCartHandler: (data) => dispatch(removeToCart(data)),
});
//here we have used export default so we can export it by any name in that place wherever we are using it
export default connect(mapStateToProps, mapDispatchToProps)(Home);
//what is the benefit of connecting this things since we have connceted now inside Home component we will get all the data present inside the store and along with that we will also get the addToCartHandler