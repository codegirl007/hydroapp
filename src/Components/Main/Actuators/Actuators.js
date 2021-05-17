import React from 'react';
import styled from 'styled-components';
import { ActuatorBasic } from './Basic/ActuatorBasic';
import { ActuatorPumps } from './Pumps/ActuatorPumps';


const ActuatorsContainer = styled.div`
    width: 100%;
    height: 100%;
    border: 0.15rem solid #A0A0A0;
    border-radius: 0.4rem;    
    box-shadow: 0.4rem 0.4rem 0.7rem #888888;
    padding: 1rem;
    overflow: hidden;
    display: grid;
    grid-template-rows: repeat(4, 1fr);
    grid-template-columns: 2fr 1fr 2rem 2fr 1fr;
    gap: 1rem;
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

  
