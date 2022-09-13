import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Calculator from './components/Calculator';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Quote from './components/Quote';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculate" element={<Calculator />} />
      <Route path="/quotes" element={<Quote />} />
      </Routes>
    </BrowserRouter>
      </div>
    );
  }
}
export default App;
