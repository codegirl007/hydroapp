import React from 'react';
import styled from 'styled-components';

const ChartContainer = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 0.4rem;    
    box-shadow: 0.4rem 0.4rem 0.7rem #888888;
    background-color: #ccff9a;
    `



export const SensorChart = () => {
 
   

    return (
          <>
            <ChartContainer style={{gridColumn: "1/2"}}></ChartContainer> 
            <ChartContainer style={{gridColumn: "4/5"}}></ChartContainer>
            <ChartContainer style={{gridColumn: "1/2"}}></ChartContainer> 
            <ChartContainer style={{gridColumn: "4/5"}}></ChartContainer>
            <ChartContainer style={{gridColumn: "1/2"}}></ChartContainer> 
            <ChartContainer style={{gridColumn: "4/5"}}></ChartContainer>
            <ChartContainer style={{gridColumn: "1/2"}}></ChartContainer> 
            <ChartContainer style={{gridColumn: "4/5"}}></ChartContainer>
          </>
                 
      )
}

  
