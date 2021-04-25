import React from 'react';
import styled from 'styled-components';

const ActuatorChartContainer = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 0.4rem;    
    box-shadow: 0.4rem 0.4rem 0.7rem #888888;
    background-color: white;
    border: 0.15rem solid #A0A0A0;

    `



export const ActuatorBasicChart = () => {
 
   

    return (
          <>
            <ActuatorChartContainer style={{gridColumn: "1/2", gridRow: "2/3" }}></ActuatorChartContainer>
            <ActuatorChartContainer style={{gridColumn: "2/3", gridRow: "2/3" }}></ActuatorChartContainer>
            <ActuatorChartContainer style={{gridColumn: "3/4", gridRow: "2/3" }}></ActuatorChartContainer>
            <ActuatorChartContainer style={{gridColumn: "4/5", gridRow: "2/3" }}></ActuatorChartContainer>
          </>

                 
      )
}

  
