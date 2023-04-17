import styled from 'styled-components';
import React from 'react';
import services from './data';
import Service from './Service';

function createService(serviceComponent) {
  return (
    <Service
      key={serviceComponent.id}
      title={serviceComponent.title}
      image={serviceComponent.image}
      description={serviceComponent.description}
    />
  );
}

const WorkingPane = () => {
  return (
    <Pane>
      {services.map(createService)}
    </Pane>
  );
};

const Pane = styled.div`
  margin: 10px 100px;
  padding: 0px 150px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  text-align: center;
  box-sizing: border-box;
`;

export default WorkingPane;
