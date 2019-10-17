import React, { Component } from 'react';
import GraphCircularBarChartData from './data.json';
import './circularBarChart.css';
import * as d3 from 'd3';

class CircularBarChart extends Component {
    componentDidMount(){
        this.CircularBarChart(GraphCircularBarChartData)
    }


    CircularBarChart=(data)=>{
        const width = 800,
        height = 500,
        chartRadius = height / 2 - 50;
      
      const color = d3.scaleOrdinal(d3.schemeCategory10);
      
      let svg = d3.select('#circularBarChart').append('svg')
        .attr('width', width)
        .attr('height', height)
        .append('g')
          .attr('transform', 'translate(' + width / 2 + ',' + (height / 2+10) + ')');
      
      let tooltip = d3.select('body').append('div')
        .attr('class', 'tooltip');
      
        
        svg.append("text")
          .attr("x",0)
          .attr("y", -230)
          .style("text-anchor", "middle")
          .style("font-size", "25px")
          .style("font-family","Helvetica")
          .style("font-style","Bold")
          .text(" Item Monthly Sales")
      
      
      
      const PI = Math.PI,
        arcMinRadius = 20,
        arcPadding = 10,
        labelPadding = -5,
        numTicks = 10;
      
      
    const render =(data1)=> {
      
        data = data1["FIREBALL CINNAMON WHISKY 50ML_profit"];

        var parse = d3.timeParse("%m");
        var format = d3.timeFormat("%b")
      
        data.forEach(function(d){
          d.name = format(parse(d.month))
          d.value =[d[2018]]
          console.log(d.value)
        })
       
        function sortAsending(a, b)
        {
          return b.value - a.value;
        }
        data=data.sort(sortAsending);
        let scale = d3.scaleLinear()
          .domain([0, d3.max(data, d => d.value) * 1.1])
          .range([0, 2 * PI]);
      
        let ticks = scale.ticks(numTicks).slice(0, -1);
        console.log(scale.ticks(numTicks))
        let keys = data.map((d, i) => d.name);
        //number of arcs
        const numArcs = keys.length;
        const arcWidth = (chartRadius - arcMinRadius - numArcs * arcPadding) / numArcs;
      
        let arc = d3.arc()
          .innerRadius((d, i) => getInnerRadius(i))
          .outerRadius((d, i) => getOuterRadius(i))
          .startAngle(0)
          .endAngle((d, i) => scale(d))
      
        let radialAxis = svg.append('g')
          .attr('class', 'r axis')
          .selectAll('g')
            .data(data)
            .enter().append('g');
      
        radialAxis.append('circle')
          .attr('r', (d, i) => getOuterRadius(i) + arcPadding);
      
        radialAxis.append('text')
          .attr('x', labelPadding)
          .attr('y', (d, i) => -getOuterRadius(i) + arcPadding)
          .style("font-size", "10px")
          .attr("fill", "black")
          .style("font-family", "Arial")
          .text(d => d.name);
      
        let axialAxis = svg.append('g')
          .attr('class', 'a axis')
          .selectAll('g')
            .data(ticks)
            .enter().append('g')
              .attr('transform', d => 'rotate(' + (rad2deg(scale(d)) - 90) + ')');
      
        axialAxis.append('line')
          .attr('x2', chartRadius);
      
        axialAxis.append('text')
          .attr('x', chartRadius + 10)
          .style('text-anchor', d => (scale(d) >= PI && scale(d) < 2 * PI ? 'end' : null))
          .style("font-size", "10px")
          .attr('transform', d => 'rotate(' + (90 - rad2deg(scale(d))) + ',' + (chartRadius + 10) + ',0)')
          .text(d => d3.format(".3s")(d));
      
        //data arcs
        let arcs = svg.append('g')
          .attr('class', 'data')
          .selectAll('path')
            .data(data)
            .enter().append('path')
            .attr('class', 'arc')
            .style('fill', (d, i) => color(i))
      
        arcs.transition()
          .delay((d, i) => i * 200)
          .duration(1000)
          .attrTween('d', arcTween);
      
        arcs.on('mousemove', showTooltip)
        arcs.on('mouseout', hideTooltip)
      
      
        function arcTween(d, i) {
          let interpolate = d3.interpolate(0, d.value);
          return t => arc(interpolate(t), i);
        }
      
        function showTooltip(d) {
          tooltip.style('left', (d3.event.pageX + 10) + 'px')
            .style('top', (d3.event.pageY - 25) + 'px')
            .style('display', 'inline-block')
            .html(d3.format(".3s")(d.value));
        }
      
        function hideTooltip() {
          tooltip.style('display', 'none');
        }
      
        function rad2deg(angle) {
          return angle * 180 / PI;
        }
      
        function getInnerRadius(index) {
          return arcMinRadius + (numArcs - (index + 1)) * (arcWidth + arcPadding);
        }
      
        function getOuterRadius(index) {
          return getInnerRadius(index) + arcWidth;
        }
      };
      render(data);  
    }
    render() {

        return (
            <div className="d-flex justify-content-around">
            <div id="circularBarChart"></div>
            <div className="chartDetails">
                <div className="chartData">
                    <div className="dataName">
                        Graph Name : <span>Circular BarChart</span>
                    </div>
                    <div className="dataDate">
                        Data format : <span>Json Format </span>
                    </div>
                    <div className="dataDate">
                        Data format : <span>  </span>
                    </div>
                    <div className="dataApi">
                        API : <span>GET</span>
                    </div>
                    <div className="dataUseCase">
                        UseCase : <span>Bar charts are a type of graph that are used to display and compare the number, frequency or other measure 
                        (e.g. mean) for different discrete categories of data. In the example below, which shows the percentage of the British 
                        population who attended different types of cultural events during 1999-2000, the types of event are the discrete categories of data.</span>
                    </div>
                </div>
            </div>   
       </div>
        )
    }
}
export default CircularBarChart;