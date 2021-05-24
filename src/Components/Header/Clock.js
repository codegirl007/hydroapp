import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const CurrentTime = styled.h3`
    font-size: 3rem;
    font-family: 'Source Sans Pro', sans-serif;
    color: white;
    float: left;
    text-align: left;
    background-color: rgba(0,0,0, 0.7);
    color: white;
    padding: 0.4%;
    border-radius: 0.4rem;
    margin-left: 0.4%;
    word-spacing: 0.4rem;
    `

const CurrentDate = styled.h2`
    font-size: 2rem;
    margin-top: 1rem;
`

export const Clock = () => {
 
    const [currentTime, setCurrentTime] = useState({
          day: new Date().getDay(),
          month: new Date().getMonth(),
          date: new Date().getDate(),
          year: new Date().getFullYear(),
          time: new Date().toLocaleTimeString()
        })


    const countingSecond = () => {    
      setCurrentTime({
      day: new Date().getDay(),
      month: new Date().getMonth(),
      date: new Date().getDate(),
      year: new Date().getFullYear(),
      time: new Date().toLocaleTimeString()})      
    }

    useEffect(() => {
      setInterval(countingSecond, 1000);
      return ()=> clearInterval(countingSecond, 1000)
      }, [])

    
      const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "November", "December"]
      const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    return (      
          <CurrentTime> {days[currentTime.day]} {currentTime.time}<br/> 
            <CurrentDate> {months[currentTime.month]} {currentTime.date}, {currentTime.year} </CurrentDate>
          </CurrentTime>      
      )
    }
  
  
