import React from 'react';
import styled from 'styled-components';
import { ActuatorBasic } from './Basic/ActuatorBasic';
import { ActuatorPumps } from './Pumps/ActuatorPumps';


const ActuatorsContainer = styled.div`
width: 100%; 
height: 100%;
border-radius: 0.4rem;
padding: 0.5rem;
overflow: hidden;
display: grid;
grid-template-rows: repeat(4, 1fr);
grid-template-columns: 5fr 1fr 5fr 1fr;
gap: 0.2rem;
align-items: center;
    `
export const Actuators = () => {
    return (
        
            <ActuatorsContainer>
                <ActuatorBasic/>
                <ActuatorPumps />
            </ActuatorsContainer>         
        
                 
      )
}

  
