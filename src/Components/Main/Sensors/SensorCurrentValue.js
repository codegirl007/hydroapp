import React from 'react';
import styled from 'styled-components';
import { SensorCVData } from '../../../Data/SensorCVData';


const CVDiv = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 0.4rem;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(220,220,220,1) 100%);
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
    margin-top: 0.8rem;
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

    return (
        <>
           {SensorCVData.map(data => {
               return   <CVDiv style={{gridArea: data.gridArea}}>
                            <H2>{data.title}</H2>
                            <Img src={data.image}></Img>  
                            <Wrapper>                          
                                <Value>{data.currentValue}</Value>
                                <Unit>{data.unit}</Unit>
                            </Wrapper>
                        </CVDiv>
              })
            }
        </>
      )
}


