import React from "react";

function Home(props) {
  //here we will get all the data from the store along with that we will get the addToCartHandler fuction to dispatch our action
  //   console.log("home", props.cardData);
  //   console.log("home", props);
  return (
    <div>
      {" "}
      <h1>This is home component </h1>
      <h1>Samsung Ultra</h1>
      <h3>Price:1000</h3>
      <button
        onClick={() =>
          props.addToCartHandler({ price: 1000, name: "samsung ultra" })
        }
        style={{
          backgroundColor: "blue",
          borderRadius: "10px",
          width: "100px",
          height: "25px",
        }}
      >
        Add to cart
      </button>
      <br />
      <button
        onClick={() =>
          // here I don't send data because I am just changing the total cart item value
          props.removeToCartHandler()
        }
        style={{
          backgroundColor: "red",
          borderRadius: "10px",
          width: "150px",
          height: "25px",
          marginTop: "25px",
        }}
      >
        Remove to cart
      </button>
      {/* I will use the bottom code in another component */}
      {/* <br />
      <span>
        <h1> {props.cardData.length}</h1>
      </span> */}
    </div>
  );
}

export default Home;
