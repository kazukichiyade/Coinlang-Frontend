import React from 'react';
import styled from 'styled-components';
import Home from './PageHome';
import Login from './PageLogin';
import { Route, Switch } from 'react-router-dom';

const HeaderStyle = styled.div`
  color: orange;
  margin-right: 10px;
`;

const Flex = styled.div`
  display: flex;
`;

const Header = () => {
  return (
    <Flex>
      <HeaderStyle>coinlang</HeaderStyle>
      {/* <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
      </Switch> */}
    </Flex>
  );
};

export default Header;
