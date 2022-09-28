import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
//Provider is used to provide all store data to components so it is used as a wrapper around the App
import { Provider } from "react-redux";
//store needs reducer so we have brought all the combined reducer which is present inside index.js in services/reducers
import rootReducer from "./services/reducers/index";
const store = createStore(rootReducer);
const root = ReactDOM.createRoot(document.getElementById("root"));
//if we console store then we can see what is present inside the store i.e all the functions
console.log(store);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
