import React from 'react';
import styled from 'styled-components';
import { useFetchStore } from '../../../../Data/useFetchStore';

const CVDiv = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 0.4rem;
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(200,200,200,1) 83%);
    border: 0.2rem solid #A0A0A0;
    position: relative;
    display: flex;
    align-items: center;
    `
const H2 = styled.h2`
    color: black;
    margin-left: 1rem;
    font-size: 1.2rem;
    @media (min-width: 1900px) {
        font-size: 2.5rem;
      }   
    `
const Img = styled.img`
    overflow: hidden;
    margin-left: 1rem;
    height: 3rem;
    width: 3rem;
    @media (min-width: 1900px) {
        height: 4rem;
        width: 4rem
      }   
           
    `
const Number = styled.div`
    color: black;
    font-size: 1.8rem;
    position: absolute;
    top: 50%;  
    right: 4%; 
    transform: translate(0, -50%);
    `



export const ActuatorBasicCV = () => {
    const { data } = useFetchStore();

    return (

        <>
           { data?.Items.map((device, index) => {
             if ((device.id.startsWith('actuator'))) {
                return <CVDiv >
                        <Img src={`./icons/svg/${device.type}.svg`}></Img>  
                               
                                <H2>{device.type}</H2>
                                <Number>{device.value}{device.unit}</Number>
                               
                       </CVDiv>
}})}
        </>
      )
}


