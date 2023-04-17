import React from 'react';
import styled from 'styled-components';

const Service = (props) => {

  return (
    <Container>
      <img src={props.image} alt={props.title}></img>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </Container>
  );
};

const Container = styled.div`
  font-family: 'Roboto', sans-serif;
  display: flex;
  flex-direction: column;
  margin: 20px;
  width: 350px;
  height: 350px;
  align-items: center;
  justify-content: center;
  background-color: #5C9F7F;
  &:hover {
    background-color: #BEBFC5;
  }
`;

export default Service;
