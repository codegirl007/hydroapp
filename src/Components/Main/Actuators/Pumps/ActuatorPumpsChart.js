import React from 'react';
import { ApexChartPumps } from '../../../../Data/ApexChartPumps';



// const ActuatorChartContainer = styled.div`
//     width: 100%;
//     height: 100%;
//     border-radius: 0.4rem;    
//     box-shadow: 0.4rem 0.4rem 0.7rem #888888;
//     background-color: #E8E8E8;
//     border: 0.15rem solid #A0A0A0;
//     `



export const ActuatorPumpsChart = () => {
 
   

    return (
          <> 
              <ApexChartPumps style={{gridArea:"2/1/3/2"}} />
           
              <ApexChartPumps style={{gridArea:"3/1/4/2" }}/>
         
              <ApexChartPumps style={{gridArea: "4/1/5/2"}}/>
        
              <ApexChartPumps style={{gridArea: "2/3/3/4" }}/>
         
              <ApexChartPumps style={{gridArea: "3/3/4/4" }}/>
      
              <ApexChartPumps style={{gridArea: "4/3/5/4" }}/>
           
          </>
                 
      )
}

  
