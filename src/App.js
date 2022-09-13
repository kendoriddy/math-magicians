import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Calculator from "./components/Calculator";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Calculator />
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
