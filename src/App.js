import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Calculator from './components/Calculator';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Quote from './components/Quote';
import RomanConverter from './components/RomanConverter';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/calculate" element={<Calculator />} />
      <Route path="/quotes" element={<Quote />} />
      <Route path="/roman" element={<RomanConverter />} />
      </Routes>
    </BrowserRouter>
      </div>
    );
  }
}
export default App;
