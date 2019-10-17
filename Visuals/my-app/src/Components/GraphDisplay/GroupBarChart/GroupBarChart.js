import React, { Component } from 'react';
import GroupBarChartData from './data.json';
import './GroupBarChart.css';
import * as d3 from 'd3';

class GroupBarChart extends Component {

    componentDidMount(){
        this.graphGroupBarChartData(GroupBarChartData)
    }

    graphGroupBarChartData = data => {

       var margin = {top: 50, right: 20, bottom: 30, left: 40},
        width = 800 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

            var svg = d3.select("#groupbarChart").append("svg")
                        .attr("width", width + margin.left + margin.right)
                        .attr("height", height + margin.top + margin.bottom)
                        // .attr("class","svg_container"),
           
          var  g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
            var svg = d3.select("svg");

                        var defs = svg.append("defs");


                        var dropShadowFilter = defs.append('svg:filter')
                        .attr('id', 'drop-shadow')
                        .attr('filterUnits', "userSpaceOnUse")
                        .attr('width', '250%')
                        .attr('height', '250%');
                        dropShadowFilter.append('svg:feGaussianBlur')
                        .attr('in', 'SourceGraphic')
                        .attr('stdDeviation', 2)
                        .attr('result', 'blur-out');
                        dropShadowFilter.append('svg:feColorMatrix')
                        .attr('in', 'blur-out')
                        .attr('type', 'hueRotate')
                        .attr('values', 180)
                        .attr('result', 'color-out');
                        dropShadowFilter.append('svg:feOffset')
                        .attr('in', 'color-out')
                        .attr('dx', 3)
                        .attr('dy', 3)
                        .attr('result', 'the-shadow');
                        dropShadowFilter.append('svg:feBlend')
                        .attr('in', 'SourceGraphic')
                        .attr('in2', 'the-shadow')
                        .attr('mode', 'normal');


                        var x0 = d3.scaleBand()
                            .rangeRound([0, width])
                            .paddingInner(0.4);

                        var x1 = d3.scaleBand()
                            .padding(0.2);

                        var y = d3.scaleLinear()
                            .rangeRound([height, 0]);

                        var z = d3.scaleOrdinal()
                            .range(["#0077FF", "#E38C16"]);



                            // add the Y gridlines
                        g.append("g")			
                            .attr("class", "grid")
                            .call(d3.axisLeft(y)
                                .tickSize(-width)
                                .tickFormat("")
                                
                                );
                        
                        var parse = d3.timeParse("%m");
                        var format = d3.timeFormat("%b")

                        const render= (data)=> {
                    

                        //console.log(data)
                        //var data = da.monthly_sales_yearwise
                        console.log(data)
                        var columns = d3.keys(data[0])
                        data.forEach(function(d){
                            d.month = format(parse(d.month))
                        })

                        var keys = columns.slice(1,3);
                        console.log(keys)

                        x0.domain(data.map(function(d) { return d.month; }));
                        x1.domain(keys).rangeRound([0, x0.bandwidth()]);
                        y.domain([0, d3.max(data, function(d) { return d3.max(keys, function(key) { return d[key]; }); })]).nice();

                        g.append("text")
                            .attr("x", (width-margin.left-margin.right)/2)
                            .attr("y", -10)
                            .attr("fill", "#0077FF")
                            .attr("class","svgtitle")
                            .attr("text-anchor", "middle")
                            .text("Comparitive chart")


                        var barG=  g.append("g")
                            .selectAll("g")
                            .attr("class","main_group")
                            .data(data)
                            .enter().append("g")
                            .attr("transform", function(d) { return "translate(" + x0(d.month) + ",0)"; })


                        barG.selectAll(".bars-container-back")
                            .data(function(d) { return keys.map(function(key) { return {key: key, value: d[key]}; }); })
                            .enter()
                            .append("rect")
                            .attr("class", "bars-container-back")
                            .attr("x", function(d) { return x1(d.key) - 4; })
                            .attr("y", function(d) { return y(d.value) - 4; })
                            .attr("width", x1.bandwidth() + 8)
                            .attr("height", function(d) { return (height ) - y(d.value) + 3; })
                            .attr("fill", "white")
                            .attr("stroke-width", "2px")
                            .attr("stroke", "transparent")
                            .attr("stroke-dasharray", "6,4")
                            .attr("shape-rendering", "crispEdges")
                                .transition()
                                .delay(500)
                                .duration(150)
                                .attr("stroke", "#727075")

                            

                                barG.selectAll(".bars-container-middle")
                            .data(function(d) { return keys.map(function(key) { return {key: key, value: d[key]}; }); })
                            .enter()
                        .append("rect")
                            .attr("class", "bars-container-middle")
                            .attr("x", function(d) { return x1(d.key) - 3; })
                            .attr("y", function(d) { return y(d.value) - 1; })
                            .attr("width", x1.bandwidth() + 6)
                            .attr("height", function(d) { return ( (height) - y(d.value)); })
                            .attr("fill", "white")
                            .attr("stroke", "none");

                        barG.selectAll(".bars")
                            .data(function(d) { return keys.map(function(key) { return {key: key, value: d[key]}; }); })
                            .enter()
                        .append("rect")
                            .attr("class", "bars")
                            .attr("x", function(d) { return x1(d.key); })
                            .attr("width", x1.bandwidth())
                                .attr("fill", function(d) { return z(d.key); })
                            .attr("y", (height))
                                .transition()
                                .delay(function (d,i){ return i * 250;}) // this is to do left then right bars
                                .duration(250)
                                .attr("y", function(d) { return y(d.value); })
                                .attr('height', function( d ) { return ((height))  - y( d.value );});


                            var bartext =  d3.format("0.2s")
                                
                        barG.selectAll(".text")
                            .data(function(d) { return keys.map(function(key) { return {key: key, value: d[key]}; }); })
                            .enter()
                        .append("text")
                            .attr("class", "bar_label")
                            .attr("x", function(d) { return x1(d.key); })
                            .attr("y", function(d) { return y(d.value)-10; })
                            .style("font-size", "10px")
                            .text(function(d){ return bartext(d.value)})
                        
                        g.append("g")
                            .attr("class", "axis")
                            .attr("transform", "translate(0," + height + ")")
                            .call(d3.axisBottom(x0));


                        var legend = g.selectAll(".legend")
                            .data(keys)
                            .enter().append("g")
                            .attr("class", "legend")
                            .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

                        legend.append("rect")
                            .attr("x", width - 18)
                            .attr("width", 18)
                            .attr("height", 18)
                            .style("fill",function(d) { return z(d); });

                        legend.append("text")
                            .attr("x", width - 24)
                            .attr("y", 9)
                            .attr("dy", ".35em")
                            .style("text-anchor", "end")
                            .text(function(d) { return d; });
                        
                        };
                        render(data.monthly_sales_yearwise)

    }
    render() {
        return (
            <div className="d-flex justify-content-around">
                <div id="groupbarChart"></div>
                <div className="chartDetails">
                    <div className="chartData">
                        <div className="dataName">
                            Graph Name : <span> Group BarChart</span>
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
export default GroupBarChart;
