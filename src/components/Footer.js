import React from 'react'
import styled from 'styled-components'

export const Footer = () => {
  return (
    <BottomFooter>
      <FooterText>© 2008 - 2022 Envestnet. All rights reserved.</FooterText>
    </BottomFooter>
  )
}

const BottomFooter = styled.div`
  font-family: 'Roboto', sans-serif;
  left: 0;
  bottom: 0;
  width: 100%;
  background: rgb(224, 226, 228);
  color: black;
  align-items: center;
  margin: 0px;
  display: grid;
  position: sticky;
`;

const FooterText = styled.p`
  text-align: center;
`;
