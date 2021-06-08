import React from 'react';
import styled from 'styled-components';
import { useFetchStore } from '../../../Data/useFetchStore';


const CVDiv = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 0.4rem;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(224,224,224,1) 100%);
    border: 0.2rem solid #A0A0A0;
    padding: 0.3rem;
    position: relative;
    `
const Img = styled.img`
    width: 45%;
    height: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); 
    `
const H2 = styled.h2`
    margin-top: 0.7rem;
    font-size: 1.3rem;
    text-align: right;
    @media (min-width: 1900px) {
        font-size: 2rem;
      }   
    `

const Wrapper = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    margin: 0.5rem;
    display: flex;
    align-items: flex-start;
    `
const Value = styled.div`
    font-size: 2rem;
    @media (min-width: 1900px) {
        font-size: 4rem;
      }   
    `
const Unit = styled.div`   
    `  


export const SensorCurrentValue = () => {
    const { data } = useFetchStore();
   
    console.log(data);
    

    return (
        <>  { data?.Items.map((device, index) => {
             if ((device.id.startsWith('sensor'))) {
                return <CVDiv >
                            <H2>{device.type}</H2>
                            <Img src={`./icons/svg/${device.type}.svg`}></Img>  
                            <Wrapper>                          
                                <Value>{device.value}</Value>
                                <Unit>{device.unit}</Unit>
                            </Wrapper>
                       </CVDiv>
}})}

        </>
      )
}


