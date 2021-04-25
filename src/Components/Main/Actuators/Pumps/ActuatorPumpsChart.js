import React from 'react';
import styled from 'styled-components';

const ActuatorChartContainer = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 0.4rem;    
    box-shadow: 0.4rem 0.4rem 0.7rem #888888;
    background-color: #E0E0E0;
    border: 0.15rem solid #A0A0A0;
    `



export const ActuatorPumpsChart = () => {
 
   

    return (
          <>
            <ActuatorChartContainer style={{gridColumn: "1/2", gridRow: "3/4" }}></ActuatorChartContainer>
            <ActuatorChartContainer style={{gridColumn: "1/2", gridRow: "4/5" }}></ActuatorChartContainer>
            <ActuatorChartContainer style={{gridColumn: "1/2", gridRow: "5/6" }}></ActuatorChartContainer>
            <ActuatorChartContainer style={{gridColumn: "4/5", gridRow: "3/4" }}></ActuatorChartContainer>
            <ActuatorChartContainer style={{gridColumn: "4/5", gridRow: "4/5" }}></ActuatorChartContainer>
            <ActuatorChartContainer style={{gridColumn: "4/5", gridRow: "5/6" }}></ActuatorChartContainer> 
          </>
                 
      )
}

  
