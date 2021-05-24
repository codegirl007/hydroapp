import { React, useState } from 'react';
import styled from 'styled-components';
import { Sensors } from './Sensors/Sensors';
import { Actuators } from './Actuators/Actuators';

const MainPart = styled.main`
    width: auto;
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: hidden;  
  
    `

const ButtonWrapper = styled.div`
    width: auto;
    height: 5vh;
    display: flex;
    margin-top: 0.7rem;
    margin-left: 0.3rem;
    `

const Button = styled.button `
    width: 15rem;
    font-size: 2rem;
    font-weight: bold;
    border-radius:  1rem 1rem 0rem 0rem;    
    border-bottom: #438F00;
    margin-right: 0.3rem;
    cursor: pointer;
    outline: none;
    `


export const Main = () => {

  const [sensorsVisible, setSensorsVisible] = useState(true);
  const [actuatorsVisible, setActuatorsVisible] = useState(false);
  
  const activeButton = { backgroundColor: '#8fdb3d', 
                         color: '#000000',
                         borderLeft: '1px solid #8fdb3d',
                         borderBottom: '#438F00'           
  };
  const notActiveButton = { backgroundColor: '#C8C8C8',
                            color: '#FFFFFF'
  };

  const onShowSensors = () => {
    setSensorsVisible(true);
    setActuatorsVisible(false);  
  };

  const onShowActuators = () => {
    setActuatorsVisible(true);
    setSensorsVisible(false);   
  };

  return (
    <MainPart>
      <ButtonWrapper>
        <Button onClick={onShowSensors} style={sensorsVisible ? activeButton: notActiveButton }>Sensors</Button>
        <Button onClick={onShowActuators} style={actuatorsVisible ? activeButton: notActiveButton }>Actuators</Button>
      </ButtonWrapper>
      
        {sensorsVisible && <Sensors/ > }
        {actuatorsVisible && <Actuators /> } 
      
    </MainPart>
  );
}

