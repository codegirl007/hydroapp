import React, { useState, useEffect } from "react";
import { FetchData } from "../../Data/FetchData";
import { useFetchStore } from "../../Data/useFetchStore";


export const FetchButton = () => {
    
      const { data } = useFetchStore();
    
      
      return (
        <>
          <FetchData />
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </>
      );
    }




  
