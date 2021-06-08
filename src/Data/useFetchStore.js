import React from 'react';
import create from "zustand";


const url = "https://39mb4p87zf.execute-api.eu-central-1.amazonaws.com/items";

const fetcher = () => fetch(url).then(data => data.json());

const createFetcher = fetch =>
create(set => ({
  invoke: async () => {
    set({ data: await fetch });
  }
}));

export const useFetchStore = createFetcher(fetcher());



