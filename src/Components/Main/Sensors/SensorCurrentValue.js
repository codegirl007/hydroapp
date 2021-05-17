import React from 'react';
import styled from 'styled-components';
import { SensorCVData } from '../../../Data/SensorCVData';


const CVDiv = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 0.4rem;
    box-shadow: 0.4rem 0.4rem 0.7rem #888888;
    background-color: #8fdb3d;
    border: 0.15rem solid #A0A0A0;
    padding: 0.5rem;
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
    font-size: 1.8rem;
    text-align: right;
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
    font-size: 4rem;   
    `
const Unit = styled.div`
   
    `  


export const SensorCurrentValue = () => {


    return (

        <>
           {SensorCVData.map(data => {
               return   <CVDiv style={{gridColumn: data.gridColumn, gridRow: data.gridRow}}>
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


