import "./App.css";
// import Home from "./components/Home";
//here we have used used with HomeContaier even though it was exported with the name Home because of export default
import HomeContainer from "./containers/HomeContainer";
import HeaderContainer from "./containers/HeaderContainer";
function App() {
  return (
    <div className="App">
      {/* <Home /> */}

      <HomeContainer />
      <HeaderContainer />
    </div>
  );
}

export default App;
