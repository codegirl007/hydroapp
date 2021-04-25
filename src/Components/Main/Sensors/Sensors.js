import React from 'react';
import styled from 'styled-components';
import { SensorChart } from './SensorChart';
import { SensorCurrentValue } from './SensorCurrentValue';

const SensorsContainer = styled.div`
    margin-right: 1rem;
    border: 0.15rem solid #A0A0A0;
    width: 50%;
    border-radius: 0.4rem;    
    box-shadow: 0.4rem 0.4rem 0.7rem #888888;
    padding: 1rem;
    overflow: hidden;
    display: grid;
    grid-template-rows: 5% repeat(4, 1fr);
    grid-template-columns: 2fr 1fr 2rem 2fr 1fr;
    gap: 1rem;
    align-items: center;
`
const H2 = styled.h2`
    font-weight: 400;
    text-align: left;
    margin-left: 2rem;
    font-size: 1.8rem;
    `


export const Sensors = () => {
 
   

    return (
        
            <SensorsContainer>
                <H2>SENSORS</H2>
                <SensorChart />
                <SensorCurrentValue />
            </SensorsContainer>         
        
                 
      )
}

  
