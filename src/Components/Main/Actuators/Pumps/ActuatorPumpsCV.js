import React from 'react';
import styled from 'styled-components';
import { ActuatorPumpsCVData } from '../../../../Data/ActuatorPumpsCVData';



const CVDiv = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 0.4rem;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(224,224,224,1) 100%);
    border: 0.2rem solid #A0A0A0;
    padding: 0.5rem;
    position: relative;
    `

const Purpose = styled.div`
    margin-top: 0.2rem;
    font-size: 1.1rem;
    text-align: right;
    @media (min-width: 1900px) {
        font-size: 1.8rem;
    } 
    `

const Img = styled.img`
    width: 45%;
    height: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); 
` 


export const ActuatorPumpsCV = () => {

    return (

        <>
           {ActuatorPumpsCVData.map(data => {
               return   <CVDiv style={{gridArea: data.gridArea}}>                            
                            <Purpose>{data.purpose}</Purpose>
                            <Img src={data.img}></Img>
                        </CVDiv>
              })
            }
          
        </>
      )
}


