import React, { useState, useEffect } from "react";
import { useFetchStore, FetchData } from "../../Data/useFetchStore";

export const FetchButton = () => {
    
      const { data } = useFetchStore();
      
      return (
        <>
          <FetchData />
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </>
      );
    }




  
