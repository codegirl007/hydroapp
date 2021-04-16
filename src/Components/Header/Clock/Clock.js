import React from 'react';
import './Clock.css';

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
        <>
          <p className="time">{this.state.time}</p>
          <h3 className='clock-text'>{days[this.state.day]} <br/> {months[this.state.month]} {this.state.date}, {this.state.year}</h3>
        </>
      )
    }
  }
  
  export default Clock;