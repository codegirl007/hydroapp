import React from 'react';
import styled from 'styled-components';
import { SensorChart } from './SensorChart';
import { SensorCurrentValue } from './SensorCurrentValue';

const SensorsContainer = styled.div`
    border: 0.5rem solid #8fdb3d;
    width: 100%;
    height: 100%;
    border-radius: 0.4rem;
    box-shadow: 0.4rem 0.4rem 0.7rem #888888;
    padding: 1rem;
    overflow: hidden;
    display: grid;
    grid-template-rows: repeat(4, 23.6%);
    grid-template-columns: 5fr 1fr 2rem 5fr 1fr;
    gap: 1rem;
    align-items: center;
`


export const Sensors = () => {
 
   

    return (
        
            <SensorsContainer>
                <SensorChart />
                <SensorCurrentValue />
            </SensorsContainer>         
        
                 
      )
}

  
