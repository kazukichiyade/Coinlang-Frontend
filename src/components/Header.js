import React from 'react';
import styled from 'styled-components';
import Home from './PageHome';
import Login from './PageLogin';
import { Route, Switch } from 'react-router-dom';

const HeaderMain = styled.header`
  width: 100%;
  ${'' /* background-color: #363636; */}
  ${'' /* background-color: #3282b8; */}
  background-color: #4CB5F5;
  color: #fff;
  text-align: center;
  padding: 10px 0;
  position: absolute; /*←絶対位置*/
  top: 0; /*上に固定*/
  display: flex;
`;

const HeaderStyle = styled.div`
  color: #f4f6ff;
`;

const Header = () => {
  return (
    <HeaderMain>
      <HeaderStyle>coinlang</HeaderStyle>
    </HeaderMain>
  );
};

export default Header;
