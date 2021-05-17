import React from 'react';
import styled from 'styled-components';
import { ActuatorPumpsCVData } from '../../../../Data/ActuatorPumpsCVData';



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

const H2 = styled.h2`
    margin-top: 0.5rem;
    font-size: 1.3rem;
    text-align: right;
    `

const Wrapper = styled.div`
    position: absolute;
    left: 25%;
    bottom: 15%;
    margin: 0.5rem;
    display: flex;
    align-items: flex-start;
    `
const Purpose = styled.div`
    font-size: 2.8rem; 
    `
const PumpImg = styled.img`
    max-width: 28%;
    max-height: auto;
    position: absolute;
    top: 9%;
    left: 12%;

    `
const DropImg = styled.img`
    max-width: 28%;
    max-height: auto;
    position: absolute;
    top: 48%;
    left: 20%;
`

export const ActuatorPumpsCV = () => {


    return (

        <>
           {ActuatorPumpsCVData.map(data => {
               return   <CVDiv style={{gridColumn: data.gridColumn, gridRow: data.gridRow}}>
                            <H2>{data.title}</H2>
                            <PumpImg src='./icons/tap.png'></PumpImg>
                            <DropImg src='./icons/drop-white.png'></DropImg>
                            <Wrapper>                          
                                <Purpose>{data.purpose}</Purpose>
                            </Wrapper>
                        </CVDiv>
              })
            }
          
        </>
      )
}


