import React from 'react';
import { Video } from './Video';
import { Clock } from './Clock';
import styled from 'styled-components';
import img from './header-background2.jpg';


const Headers = styled.div`
  background: url(${img}) repeat center/cover;
  width: auto; 
  height: 18rem;
  border-radius: 0.4rem;
  overflow: hidden;
  position: relative;
  padding: 0.4%;
  box-shadow: 0.4rem 0.4rem 0.7rem #888888;
}
`
const H1 = styled.h1`
  float: right;
  font-size: 2.3rem;
  background-color: rgba(255,255,255, 0.9);
  padding: 0.5%;
  border-radius: 0.4rem;
  color: #303030;
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

  
