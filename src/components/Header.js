import React from 'react';
import styled from 'styled-components';
import Home from './PageHome';
import Login from './PageLogin';
import { Route, Switch } from 'react-router-dom';

const HeaderStyle = styled.div`
  color: orange;
`;

const HeaderMain = styled.header`
  background-color: #08a6ff;
`;

const Flex = styled.div`
  display: flex;
`;

const Header = () => {
  return (
    <HeaderMain>
      <HeaderStyle>coinlang</HeaderStyle>
    </HeaderMain>
  );
};

export default Header;
