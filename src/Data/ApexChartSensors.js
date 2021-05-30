import moment from 'moment';
import React, { useState } from 'react';
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

const styles = {
   position: 'absolute', 
   bottom: '0', 
   left:'0', 
   right: '0'
}

export const ApexChartSensors = () => {
  
  const seriesArray = [
    {
      data: [
        [1578265200000, 1],
        [1578272400000, 2],
        [1578279600000, 3],
        [1578286800000, 4],
        [1578294000000, 3],
        [1578301200000, 2],
        [1578308400000, 1],
        [1578315600000, 0],
        [1578322800000, 1],
        [1578330000000, 1],
        [1578337200000, 1],
        [1578344400000, 1],
        [1578351600000, 2]]
      }
  ]
  
  const [series, setSeries] = useState(seriesArray);
  const [options, setOptions] = useState({
            chart: {
                toolbar: {
                  show: false
                },
                type: 'line',
                zoom: {
                  enabled: true
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
              type: "datetime",
              labels: {
                datetimeUTC: false
              }
            },
            tooltip: {
              x: {
                format: "HH:mm"
              }
            }
            
  }) 
   
    return (
      <Div>
        <ReactApexChart options={options} 
                        series={series} 
                        type="area" 
                        height={'100%'} 
                        width={'100%'}
                        style={styles} />
      </Div>
    );
  }


