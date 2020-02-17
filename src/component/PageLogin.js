import React from 'react';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';

const Login = () => {
  return (
    <div>
      <RaisedButton>
        <Link to="/">Coinlang</Link>
      </RaisedButton>
    </div>
  );
};

export default Login;
