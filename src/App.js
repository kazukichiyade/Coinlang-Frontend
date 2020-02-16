import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Link, Redirect, withRouter } from 'react-router-dom';
import Home from '../src/component/PageHome';
import Login from '../src/component/PageLogin';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <div>
          <Link to="/">Coinlang</Link>
          <Link to="/login">LOGIN</Link>
        </div>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/login" render={() => <Login />} />
      </div>
    </BrowserRouter>
  );
};

export default App;
