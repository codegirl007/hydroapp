import React from 'react';
import { Video } from './Video';
import Clock from './Clock';
import styled from 'styled-components';
import img from './header-background.jpg';


const Headers = styled.div`
  background: url(${img}) repeat center/cover;
  width: auto;
  height: 20vh;
  margin: 1rem 1rem 0 1rem;
  border-radius: 0.4rem;
  overflow: hidden;
  box-shadow: 0.4rem 0.4rem 0.7rem #888888;
  position: relative;
  padding: 0.4%;
  z-index: -100;
  &::before {
    content: "";
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    background-color: rgba(255,255,255, 0.3);
    z-index: -99;
}
`

const H1 = styled.h1`
  float: right;
  font-size: 1.5rem;
  background-color: rgba(255,255,255, 0.8);
  padding: 0.5%;
  border-radius: 0.4rem;
  color: #303030;
  box-shadow: 0.3rem 0.3rem 0.6rem #202020;
  z-index: 99;
  @media (min-width: 1900px) {
    font-size: 2.3vw;
  }
`

export const Header = () => {
 
   

    return (
        <Headers>
            <Video />
            <Clock />
            <H1>Hydroponic Project</H1>
        </Headers>              
      )
}

  
