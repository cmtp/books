import React from 'react';
import PropTypes from 'prop-types';

import Header from '../shared/components/layout/Header';
import Footer from '../shared/components/layout/Footer';
import Content from '../shared/components/layout/Content';

import './App.css';

function App(props) {
  return (
    <div className="App">
      <Header />
      <Content>{props.children}</Content>
      <Footer />
    </div>
  );
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
