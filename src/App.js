import React from "react";
import Routing from "./App.Routing";

// import { Provider } from "react-redux";
// import createStore from "./createReduxStore";
// const store = createStore();

let history = null;
function App() {
  return (
    <div>
      <h1>App</h1>
      <Routing history={history} />
    </div>
  );
}

export default App;
