import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

import CoinType from '../components/CoinType';

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
  const [bitCoin, setBitCoin] = useState([]);

  useEffect(() => {
    console.log('Effect');
    axios.get('http://localhost:9000').then((response) => {
      console.log(response.data);
      setBitCoin(response.data);
    });
  }, []);

  return (
    <div>
      <StyledButton>
        <Link to="/">Coinlang</Link>
      </StyledButton>
      <StyledButton>
        <Link to="/login">LOGIN</Link>
      </StyledButton>
      {/* Coin名表示 */}
      <CoinType coin={bitCoin} />
      <span> BID(売) {bitCoin.best_bid}</span>
      <span> ASK(買) {bitCoin.best_ask}</span>
      <span> LTP(最終取引価格) {bitCoin.ltp}</span>
      <span>{bitCoin.timestamp}</span>
    </div>
  );
};

export default Home;
