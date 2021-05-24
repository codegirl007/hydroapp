import React from 'react';
import ReactApexChart from 'react-apexcharts';
import styled from 'styled-components';

const Div = styled.div`
   width: 100%;
   height: 100%;
   padding: 0;
   margin: 0;
   border: 1px solid #888888;
   border-radius: 0.4rem;   
   background-color: white;   
`

export class ApexChartActuators extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    
      series: [{
          data: [19, 18, 20, 18, 20, 19, 18, 19, 19]
      }],
      options: {
        chart: {
          toolbar: {
            show: false
          },
          animations: {
            enabled: true,
            easing: 'linear',
            dynamicAnimation: {
              speed: 1000
            }
          },
          type: 'line',
          zoom: {
            enabled: false
          },        
        },
        colors: ['#76C224'],
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth',
          colors: ['#76C224'],
          width: 2
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          },
        },
        xaxis: {
          categories: ['08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00', '00:00', '02:00'],
        }
      },
    
    
    };
  }

  render() {
    return (
      <Div>
        <ReactApexChart options={this.state.options} series={this.state.series} type="area" height={'80%'} width={'100%'} />
      </Div>
    );
  }
}

