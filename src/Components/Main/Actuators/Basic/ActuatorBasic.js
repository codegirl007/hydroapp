import React from 'react';
import styled from 'styled-components';
import { ActuatorBasicChart } from './ActuatorBasicChart';
import { ActuatorBasicCV } from './ActuatorBasicCV';


const ActuatorsBasicContainer = styled.div`
      grid-column: 1/6;
      grid-row: 1/2;
      height: 100%;
      width: 100%;
      display: grid;
      grid-template-rows: 1fr 3fr;
      grid-template-columns: repeat(4, 1fr);
      gap: 1rem;
    `


export const ActuatorBasic = () => {
 
   

    return (
      <ActuatorsBasicContainer >
        <ActuatorBasicChart />
        <ActuatorBasicCV />
      </ActuatorsBasicContainer>                
      )
}

  
