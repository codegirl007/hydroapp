import React from 'react';
import styled from 'styled-components';
import img from './header-video.jpg';

const VideoContainer = styled.div`
      aspect-ratio: 16/9 ;
      height: 100%;
      position: relative;
      background: url(${img}) no-repeat center/cover;
      border-radius: 0.4rem;  
      float: left;
`

export const Video = () => {
 
    return (
            <VideoContainer>
            </VideoContainer>         
    )
}

  
