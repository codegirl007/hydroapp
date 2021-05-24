import React from 'react';
import styled from 'styled-components';
import { ActuatorPumpsCVData } from '../../../../Data/ActuatorPumpsCVData';



const CVDiv = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 0.4rem;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(216,216,216,1) 100%);
    border: 0.2rem solid #A0A0A0;
    padding: 0.5rem;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    `

const H2 = styled.h2`
    position: absolute;
    font-size: 1.3rem;
    top: 1%;
    right: 1%;
    `

const Purpose = styled.div`
    font-size: 2.8rem;
    color: #76C224;
    font-weight: 500; 
    @media (min-width: 1900px) {
        font-size: 3rem;
    }
    `


export const ActuatorPumpsCV = () => {

    return (

        <>
           {ActuatorPumpsCVData.map(data => {
               return   <CVDiv style={{gridArea: data.gridArea}}>
                            <H2>Dosing Pump</H2>
                            <Purpose>{data.purpose}</Purpose>
                        </CVDiv>
              })
            }
          
        </>
      )
}


