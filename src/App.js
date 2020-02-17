import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Link, Switch, Redirect, withRouter } from 'react-router-dom';
import Home from '../src/component/PageHome';
import Login from '../src/component/PageLogin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const App = () => {
  return (
    <MuiThemeProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
  );
};

export default App;
