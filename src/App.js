import React from 'react';
import Calculator from './components/Calculator';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/" element={<Calculator />} />
      </Routes>
    </BrowserRouter>
      </div>
    );
  }
}
export default App;
