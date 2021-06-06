import React, { useState, useEffect } from "react";

export const FetchButton = () => {
     const [data, setData] = useState();


    useEffect(() => {
    fetch("https://39mb4p87zf.execute-api.eu-central-1.amazonaws.com/items")
    .then((response) => response.json())
    .then((json) =>  {      
      console.log(json);
      setData(json);      
     })
    .catch((error) => console.log('Error while fetching:', error));
  }, []);



    // fetch("https://39mb4p87zf.execute-api.eu-central-1.amazonaws.com/items/sensor1")
    //   .then((response) => response.json())
    //   .then((json) => setData(json))
    //   .catch((error) => console.log(error));

    // fetch('http://localhost:3000/news.json')
    // .then(serverResponse => serverResponse.text())
    // .then(responseText => {
    //   const data = JSON.parse(responseText);
    //   carousel.populateNewsCarousel(data.articles);
    // });

    // ('API-URL', {
    //   method: 'GET',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'x-api-key': 'API-KEY',
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     return data;
    //   })

  return (
    <>
      data
    </>
  );
};



  
