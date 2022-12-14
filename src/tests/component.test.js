import React from 'react';
import renderer from 'react-test-renderer';
import { Router } from 'react-router-dom';

import Home from '../components/Home';
import Quote from '../components/Quote';
import Navbar from '../components/Navbar';
import Calculator from '../components/Calculator';

describe('Component test', () => {
  it('Should render the home component', () => {
    const home = renderer.create(<Home />).toJSON();
    expect(home).toMatchSnapshot();
  });

  it('Should render the quote component', () => {
    const quote = renderer.create(<Quote />).toJSON();
    expect(quote).toMatchSnapshot();
  });

  it('Should render the calculator component', () => {
    const calculator = renderer.create(<Calculator />).toJSON();
    expect(calculator).toMatchSnapshot();
  });

  it('Should render the navbar component', () => {
    <Router>
      const navbar = renderer.create(
      <Navbar />
      ).toJSON(); expect(navbar).toMatchSnapshot();
    </Router>;
  });
});