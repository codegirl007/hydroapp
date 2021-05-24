import React from 'react';
import { ApexChartSensors } from '../../../Data/ApexChartSensors.js';


   

export const SensorChart = () => {
           
   return (
          <>                        
            <ApexChartSensors name="Temperature/day" style={{gridColumn: "1/2"}} />          
            <ApexChartSensors name="pH/day" style={{gridColumn: "3/4"}}/> 
            <ApexChartSensors name="Humidity/day" style={{gridColumn: "1/2"}}/> 
            <ApexChartSensors name="Water-flow/day" style={{gridColumn: "3/4"}}/> 
            <ApexChartSensors name="Lighting/day" style={{gridColumn: "1/2"}}/> 
            <ApexChartSensors name="EC/day" style={{gridColumn: "3/4"}}/> 
            <ApexChartSensors name="CO2/day" style={{gridColumn: "1/2"}}/> 
            <ApexChartSensors name="Water-level/day" style={{gridColumn: "3/4"}}/> 
          </>
   )
}

  
