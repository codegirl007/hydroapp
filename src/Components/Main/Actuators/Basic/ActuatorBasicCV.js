import React from 'react';
import styled from 'styled-components';
import { ActuatorBasicCVData } from '../../../../Data/ActuatorBasicCVData';




const CVDiv = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 0.4rem;
    box-shadow: 0.4rem 0.4rem 0.7rem #888888;
    background-color: #ccff9a;
    color: white;
    border: 0.15rem solid #A0A0A0;
    padding: 0.5rem;
    position: relative;
    display: flex;
    `
const H2 = styled.h2`
    color: black;
    margin-left: 1rem;
    `


const Img = styled.img`
    height: 3rem;
    width: 3rem;   
    
    `
const Number = styled.div`
    color: black;
    font-size: 3rem;
    position: absolute;
    right: 0;
    top: 26%;
    `



export const ActuatorBasicCV = () => {


    return (

        <>
           {ActuatorBasicCVData.map(data => {
               return   <CVDiv style={{gridColumn: data.gridColumn, gridRow: data.gridRow}}>
                            <Img src={data.image}></Img>
                            <H2>{data.title}</H2>
                            <Number>{data.number}</Number>
                                                         
                        </CVDiv>
              })
            }
          
        </>
      )
}


