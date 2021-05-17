import { randomNormal } from 'd3-random';
import React from 'react';
import ReactApexChart from 'react-apexcharts';
import styled from 'styled-components';

const Div = styled.div`
   width: 100%;
   height: 100%;
   padding: 0;
   margin: 0;
`
export class ApexChart extends React.Component {
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
          type: 'line',
          zoom: {
            enabled: false
          },
          fontFamily: 'Montserrat',
          fontWeight: 'normal',          
        },
        colors: [this.props.fillColor],
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth',
          colors: [this.props.strokeColor],
          width: 3
        },
        title: {
          text: this.props.name,
          align: 'left',
          
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
        <ReactApexChart options={this.state.options} series={this.state.series} type="area" height={'100%'} width={'100%'} />
      </Div>
    );
  }
}

