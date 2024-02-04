import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Home from "./components/Home";
import Detail from "./components/Detail";

function App() {
  return (
    <Provider store={store}>
      <Router>
        {/* <Switch> */}
        <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/item/:id" element={<Detail/>} />
        </Routes>
          
        {/* </Switch> */}
      </Router>
    </Provider>
  );
}

export default App;
