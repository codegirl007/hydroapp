import React from 'react';
import { ApexChartActuators } from '../../../../Data/ApexChartActuators';



export const ActuatorBasicChart = () => {

  return (
          <>           
            <ApexChartActuators style={{gridColumn: "1/2"}} /> 
            <ApexChartActuators style={{gridColumn: "2/3"}} />
            <ApexChartActuators style={{gridColumn: "3/4"}} />
            <ApexChartActuators style={{gridColumn: "4/5"}} />
          </>

                 
      )
}

  
