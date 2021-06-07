import React from 'react';
import create from "zustand";
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
    }`

const url = "https://39mb4p87zf.execute-api.eu-central-1.amazonaws.com/items/sensor1";

const fetcher = () => fetch(url).then(data => data.json());

const createFetcher = fetcher =>
create(set => ({
  data: {},
  invoke: async () => {
    set({ data: await fetcher() });
  }
}));

export const useFetchStore = createFetcher(fetcher);

export const FetchData = () => {

  const invoke = useFetchStore(state => state.invoke);
  
  return (
  <Button onClick={invoke}>FetchData</Button>
  );

}

