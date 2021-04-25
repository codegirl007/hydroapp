import React from 'react';
import styled from 'styled-components';
import { Sensors } from './Sensors/Sensors';
import { Actuators } from './Actuators/Actuators';

const MainPart = styled.main`
    width: auto;
    height: 80vh;
    margin: 1rem;
    display: flex;
    `

export const Main = () => {
 
   

    return (
        <MainPart>
            <Sensors />
            <Actuators />
        </MainPart>              
      )
}

  