import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Link, Switch, Redirect, withRouter } from 'react-router-dom';

import Header from '../src/components/Header';
import Footer from '../src/components/Footer';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const App = () => {
  return (
    <MuiThemeProvider>
      <BrowserRouter>
        <Header />

        <Footer />
      </BrowserRouter>
    </MuiThemeProvider>
  );
};

export default App;
