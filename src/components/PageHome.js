import React, { useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

const StyledButton = styled(Button)`
  background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
  border-radius: 3px;
  border: 0;
  color: white;
  height: 48px;
  padding: 0 30px;
  box-shadow: 0 3px 5px 2px rgba(255, 105, 135, 0.3);
`;

const Home = () => {
  useEffect(() => {
    const getBitCoin = async () => {
      const response = await axios.get('https://public.bitbank.cc/xrp_jpy/ticker');
      console.log(response.data);
    };
    getBitCoin();
  }, []);

  return (
    <div>
      <StyledButton>
        <Link to="/">Coinlang</Link>
      </StyledButton>
      <StyledButton>
        <Link to="/login">LOGIN</Link>
      </StyledButton>
    </div>
  );
};

export default Home;
