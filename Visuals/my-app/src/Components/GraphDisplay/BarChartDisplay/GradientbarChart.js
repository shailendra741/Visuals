import React, { Component } from 'react';
import GraphBarChartData from './bar.json';
import './barChart.css';
import * as d3 from 'd3';


class GradientbarChart extends Component {
    componentDidMount(){
        this.graphBarChartData(GraphBarChartData)
    }

    graphBarChartData=(data)=>{
        var width=800,height=500;
        const svg = d3.select("#gradientbarChart")
                .append('svg')
                .attr("width", width)
                .attr("height", height);
               

            // const width = svg.attr('width');
            // const height = svg.attr('height');


            const render = data => {
                const xvalue =  d => d.value;
                const yvalue = d => d.key;

                var margin = {top: 50, right: 20, bottom: 50, left: 180};
                var innerwidth = width - margin.left - margin.right;
                var innerheight = height - margin.top - margin.bottom;






                var gradient = svg.append("svg:defs")
                    .append("svg:linearGradient")
                    .attr("id", "gradient")
                    .attr("x1", "0%")
                    .attr("y1", "0%")
                    .attr("x2", "100%")
                    .attr("y2", "0%")
                    .attr("spreadMethod", "pad");

                    gradient.append("svg:stop")
                    .attr("offset", "0%")
                    .attr("stop-color", "#99DAFF")
                    .attr("stop-opacity", 1);

                    gradient.append("svg:stop")
                    .attr("offset", "200%")
                    .attr("stop-color", "#49687A")
                    .attr("stop-opacity", 1);


                    var defs = svg.append("defs");
                    // black drop shadow
                    var filter = defs.append("filter")
                        .attr("id", "drop-shadow")
                    filter.append("feGaussianBlur")
                        .attr("in", "SourceAlpha")
                        .attr("stdDeviation", 1)
                        .attr("result", "blur");
                    filter.append("feOffset")
                        .attr("in", "blur")
                        .attr("dx", 1.5)
                        .attr("dy", 1.5)
                        .attr("result", "offsetBlur");
                    var feMerge = filter.append("feMerge");
                    feMerge.append("feMergeNode")
                        .attr("in", "offsetBlur")
                    feMerge.append("feMergeNode")
                        .attr("in", "SourceGraphic");


    

                const g = svg.append('g')
                            .attr('transform', "translate(" + margin.left + "," + margin.top + ")");
            

                const xscale = d3.scaleLinear()
                            .domain([0, d3.max(data, xvalue)])
                            .range([0, innerwidth]);

                const xaxistickformat = number =>
                                d3.format('.3s')(number);

                  const yscale = d3.scaleBand()
                            .domain(data.map(yvalue))
                            .range([0, innerheight])
                            .padding(0.4);

                const yaxis = d3.axisLeft(yscale);
                const yaxisG = g.append('g').attr("class","axis_text").call(yaxis)

                yaxisG.selectAll('.domain, .tick line')
                                .remove()


            g.selectAll('rect')
                .data(data)
                .enter()
                .append('rect')
                .attr("rx", 12)
                .attr("ry", 12)
                .attr('y', d => yscale(yvalue(d)))
           .attr("class","")

                .attr("width", 0)
                .transition()
			    .duration(2500)
			    .delay(function (d, i) {
				        return i * 50;
                })
                .attr('width', d => xscale(xvalue(d)))
                .attr('height', yscale.bandwidth())
                //.style('fill', "pink")
            
          .style("fill", "url(#gradient)")
           .style("filter", "url(#drop-shadow)")

        
            g.selectAll(".text")
                    .data(data)
                    .enter()
                    .append("text")
                    .attr("class", "elegantshd")
                    .attr("y", d => yscale(yvalue(d))+yscale.bandwidth()/2+4)
                    .attr("x", d => xscale(xvalue(d))-5)

                    .attr("text-anchor", "end")
                    .attr("font-size", "10px")
                    .text(function(d){ return xaxistickformat(xvalue(d))})
                    .style("fill", "white");

                g.append('text')
                    .attr("class", "svgtitlegradientbarchart")
                    .attr('y', -5)
                    .attr('x', innerwidth/2-50)
                    .attr('text-anchor', "middle")
                    .text("Item Monthly Sales")
                
                    .attr("fill","rgb(123, 185, 202)")
                   
                    ;
                    
                   
                console.log(innerwidth)
                };    
                // d3.json("bar.json", function(data){
                //     console.log(data.result)
                render(data.result);
        };

    render() {
     
        return ( 
           <div className="d-flex justify-content-around">
                <div id="gradientbarChart"></div>
                <div className="chartDetails">
                    <div className="chartData">
                        <div className="dataName">
                            Graph Name : <span> BarChart</span>
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

export default GradientbarChart;