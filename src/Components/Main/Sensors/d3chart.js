import React, {useRef, useEffect, useState} from 'react';
import  { select , line, curveCardinal } from 'd3';

const data = [25,30,45,60,20, 65, 75]

function D3chart() {
   
    const svgRef = useRef();
    useEffect(() => {
        const svg = select(svgRef.current);
        const myLine = line()
        .x((value, index) => index*50)
        .y(value => 150-value)
        .curve(curveCardinal);
        svg
        .selectAll("path")
        .data([data])
        .join('path')
        .attr('d', value => myLine(value))
        .attr('fill', 'none')
        .attr('stroke', 'green');
    }, [data]);
    return (  
        <>
            <svg style={{backgroundColor: 'white'}} ref={svgRef}>
                <path d="M0, 150 100, 100 150,120" stroke="green" fill="none" />
            </svg>
        <br />
       
        </>
      );
}

export default D3chart;