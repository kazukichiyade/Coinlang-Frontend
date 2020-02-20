import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Link, Switch, Redirect, withRouter } from 'react-router-dom';
import Home from '../src/components/PageHome';
import Login from '../src/components/PageLogin';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const App = () => {
  return (
    <MuiThemeProvider>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </MuiThemeProvider>
  );
};

export default App;
