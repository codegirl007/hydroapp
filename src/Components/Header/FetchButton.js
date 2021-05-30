import React from 'react';
import { fetchData } from './AwsFunctions';
import styled from 'styled-components';

const Button = styled.button`
    position: absolute;
    right: 0.2%;
    bottom: 1%;
    font-size: 1.2rem;
    padding: 0.3%;
    border-radius: 0.4rem;
    background-color: rgba(0,0,0, 0.7);
    color: white;
    cursor: pointer;
    @media (min-width: 1900px) {
    font-size: 0.7vw;
    }
`



export const FetchButton = () => {
  
  const fetchDataFormDynamoDb = () => {
    fetchData('users')
  }
  
  return <>
    <Button onClick={() => fetchDataFormDynamoDb()}> Fetch Data </Button>
  </>
}

  
