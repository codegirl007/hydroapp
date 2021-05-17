import React from 'react';
import styled from 'styled-components';
import { ApexChart } from '../../../Data/ApexChart.js';

import D3chart from './d3chart';



const ChartContainer = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 0.4rem;    
    box-shadow: 0.4rem 0.4rem 0.7rem #888888;
    background-color: white;
    display: flex;
    justify-content: center;
    `




export const SensorChart = () => {
           
   return (
          <>
           
            <ChartContainer style={{gridColumn: "1/2"}}>             
              <ApexChart name="Temperature/day" strokeColor="#8fdb3d" fillColor="#8fdb3d" />          
            </ChartContainer> 
            <ChartContainer style={{gridColumn: "4/5"}}>
              <ApexChart name="pH/day" strokeColor="#8fdb3d" fillColor="#8fdb3d" /> 
            </ChartContainer>
            <ChartContainer style={{gridColumn: "1/2"}}>
              <ApexChart name="Humidity/day"  strokeColor="#8fdb3d" fillColor="#8fdb3d"/> 
            </ChartContainer> 
            <ChartContainer style={{gridColumn: "4/5"}}>
              <ApexChart name="Water-flow/day" strokeColor="#8fdb3d" fillColor="#8fdb3d" /> 
            </ChartContainer>
            <ChartContainer style={{gridColumn: "1/2"}}>
              <ApexChart name="Lighting/day" strokeColor="#8fdb3d" fillColor="#8fdb3d" /> 
            </ChartContainer> 
            <ChartContainer style={{gridColumn: "4/5"}}>
              <ApexChart name="EC/day" strokeColor="#8fdb3d" fillColor="#8fdb3d" /> 
            </ChartContainer>
            <ChartContainer style={{gridColumn: "1/2"}}>
              <ApexChart name="CO2/day" strokeColor="#8fdb3d" fillColor="#8fdb3d" /> 
            </ChartContainer> 
            <ChartContainer style={{gridColumn: "4/5"}}>
              <ApexChart name="Water-level/day" strokeColor="#8fdb3d" fillColor="#8fdb3d" /> 
            </ChartContainer>
          </>
                 
      )
}

  
