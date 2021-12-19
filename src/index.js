import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import React from "react";
import { createStore } from "redux";
import App from "./App";
import reducer from "../src/components/reduceres";
const store = createStore(reducer);

class Main extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <React.Fragment>
          <App />
        </React.Fragment>
      </Provider>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Main />, rootElement);
