import React from 'react';
import styled from 'styled-components';

const FooterDiv = styled.div`
  font-size: 10px;
  color: #eeeeee;
`;

const FooterMain = styled.footer`
  width: 100%;
  ${'' /* background-color: #363636; */}
  background-color: #08a6ff;
  color: #fff;
  text-align: center;
  padding: 15px 0;
  position: absolute; /*←絶対位置*/
  bottom: 0; /*下に固定*/
`;

const Footer = () => {
  return (
    <FooterMain>
      <FooterDiv>©️Copyright 2020 CoinLang All Right Reserved.</FooterDiv>
    </FooterMain>
  );
};

export default Footer;
