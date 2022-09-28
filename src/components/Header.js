import React from "react";

function Header(props) {
  //   console.log("header", props);
  return (
    <div style={{ top: "20px", left: "600px" }}>
      <h1>{props.cardData.length}</h1>
    </div>
  );
}

export default Header;
