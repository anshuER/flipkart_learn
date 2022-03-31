import NavBar from "./components/navbar";
import RouterList from "./router";
import { Provider } from "react-redux";

import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <RouterList />
    </>
  );
}

export default App;
