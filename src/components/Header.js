import React from 'react';
import styled from 'styled-components';

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
      <div>Header</div>
    </Flex>
  );
};

export default Header;
