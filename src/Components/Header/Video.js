import React from 'react';
import styled from 'styled-components';
import img from './header-video.jpg';

const VideoContainer = styled.div`
      width: calc(20vh*(16/9));
      height: 100%;
      position: relative;
      background: url(${img}) no-repeat center/cover;
      border-radius: 0.4rem;  
      float: left;
      box-shadow: 0.3rem 0.3rem 0.6rem #202020;
`



export const Video = () => {
 
   

    return (
        
            <VideoContainer>
            </VideoContainer>         
        
                 
      )
}

  
