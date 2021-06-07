import React from 'react';
import create from "zustand";

 
const url = "https://39mb4p87zf.execute-api.eu-central-1.amazonaws.com/items/sensor1";

const fetcher = () => fetch(url).then(data => data.json());

const createFetcher = fetcher =>
create(set => ({
  invoke: async () => {
    set({ data: await fetcher() });
  }
}));

export const useFetchStore = createFetcher(fetcher);



