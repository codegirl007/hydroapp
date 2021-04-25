import React from 'react';
import styled from 'styled-components';



const CurrentTime = styled.h3`
    font-size: 3rem;
    color: white;
    float: left;
    text-align: left;
    background-color: rgba(0,0,0, 0.7);
    color: white;
    padding: 0.4%;
    border-radius: 0.4rem;
    margin-left: 0.4%;
    box-shadow: 0.3rem 0.3rem 0.6rem #202020;
    `

const CurrentDate = styled.h2`
    font-size: 2rem;
    margin-top: 1rem;
`

class Clock extends React.Component {
    constructor(props) {
      super(props);
      let d = new Date()
        this.state = {
          day: d.getDay(),
          month: d.getMonth(),
          date: d.getDate(),
          year: d.getFullYear(),
          time: d.toLocaleTimeString()
        }
      this.countingSecond = this.countingSecond.bind(this)
    }
    countingSecond() {
      let d = new Date()
      this.setState({
        day: d.getDay(),
        month: d.getMonth(),
        date: d.getDate(),
        year: d.getFullYear(),
        time: d.toLocaleTimeString()
      })
    }
    componentWillMount() {
      setInterval(this.countingSecond, 1000)
    }
    render() {
      const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "November", "December"]
      const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    return (      
          <CurrentTime> {days[this.state.day]} {this.state.time}<br/> 
          <CurrentDate> {months[this.state.month]} {this.state.date}, {this.state.year} </CurrentDate>
          </CurrentTime>      
      )
    }
  }
  
  export default Clock;