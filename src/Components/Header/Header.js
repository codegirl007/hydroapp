import React from 'react';
import { Video } from './Video';
import Clock from './Clock';
import styled from 'styled-components';
import img from './header-background.jpg';


const Headers = styled.div`
  background: url(${img}) repeat center/cover;
  width: auto;
  margin-bottom: 1rem;
  height: 25rem;
  border-radius: 0.4rem;
  overflow: hidden;
  box-shadow: 0.4rem 0.4rem 0.7rem #888888;
  position: relative;
  padding: 0.4%;
  z-index: -100;
}
`

const H1 = styled.h1`
  float: right;
  font-size: 2.3rem;
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

const H3 = styled.h3`
   text-transform: uppercase;
   font-size: 4rem;
   color: #000000;
   font-weight: 700;
   position: absolute;
   top: 50%;  
   left: 50%; 
   transform: translate(-50%, -50%);
`

export const Header = (props) => {
 
   const { toggleHeading } = props;

    return (
        <Headers>
            <Video />
            <Clock />
            <H3>{toggleHeading}</H3>
            <H1>Hydroponic Project</H1>
        </Headers>              
      )
}

  
