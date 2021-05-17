import React from 'react';
import styled from 'styled-components';
import { ApexChart } from '../../../../Data/ApexChart';

const ActuatorChartContainer = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 0.4rem;    
    box-shadow: 0.4rem 0.4rem 0.7rem #888888;
    background-color: #E8E8E8;
    border: 0.15rem solid #A0A0A0;
    `

const colorThemeUpper = "#76C224";
const colorThemeMiddle = "#76C224";
const colorThemeLower = "#76C224";

export const ActuatorPumpsChart = () => {
 
   

    return (
          <>
            <ActuatorChartContainer style={{gridColumn: "1/2", gridRow: "2/3" }}>
              <ApexChart strokeColor={colorThemeUpper} fillColor={colorThemeUpper}/>
            </ActuatorChartContainer>
            <ActuatorChartContainer style={{gridColumn: "1/2", gridRow: "3/4" }}>
              <ApexChart strokeColor={colorThemeMiddle} fillColor={colorThemeMiddle}/>
            </ActuatorChartContainer>
            <ActuatorChartContainer style={{gridColumn: "1/2", gridRow: "4/5" }}>
              <ApexChart strokeColor={colorThemeLower} fillColor={colorThemeLower}/>
            </ActuatorChartContainer>
            <ActuatorChartContainer style={{gridColumn: "4/5", gridRow: "2/3" }}>
              <ApexChart strokeColor={colorThemeUpper} fillColor={colorThemeUpper}/>
            </ActuatorChartContainer>
            <ActuatorChartContainer style={{gridColumn: "4/5", gridRow: "3/4" }}>
              <ApexChart strokeColor={colorThemeMiddle} fillColor={colorThemeMiddle}/>
            </ActuatorChartContainer>
            <ActuatorChartContainer style={{gridColumn: "4/5", gridRow: "4/5" }}>
              <ApexChart strokeColor={colorThemeLower} fillColor={colorThemeLower}/>
            </ActuatorChartContainer> 
          </>
                 
      )
}

  
