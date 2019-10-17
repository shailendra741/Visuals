import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BarChartImg1 from '../../GraphImages/BarChartImages/BarChart.png';
import CircularChart from '../../GraphImages/BarChartImages/CircularBarChart.png';
import GroupBarChart from '../../GraphImages/BarChartImages/GroupBarChart.png';
import RadialBarChart from '../../GraphImages/BarChartImages/RadialBarChart.png';

class GraphImageTiles extends Component {
    state = {
        image: [BarChartImg1, CircularChart, GroupBarChart, RadialBarChart],
        title:['Gradient BarChart', 'Circular BarChart', 'Group BarChart', 'Radial BarChart'],
        text: ['Bar charts are a type of graph that are used to display and compare the number, frequency or other measur', 'A Circular Bar Chart is simply a Bar Chart plotted on a polar coordinate system, rather then on a cartesian one.', 'A grouped bar chart, also known as clustered bar graph, multi-set bar chart, or grouped column chart, is a type of bar graph that is used to represent and compare different categories of two or more groups.', 'A Radial Bar Chart is simply a Bar Chart plotted on a polar coordinate system, rather then on a cartesian one.'],
        href:['/gradientBarChart', '/circularBarChart', '/groupBarChart', '/radialBarChart']
    }

    imageTiles = () => (
        this.state.image.map((a,i) => (
            <div className="col-md-3" key={i}>
                <div className="card hoverable mb-4">
                    <img className="card-img-top" src={this.state.image[i]} alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{this.state.title[i]}</h5>
                        <p className="card-text">{this.state.text[i]}</p>
                        <Link to={this.state.href[i]} className="btn btn-outline-primary waves-effect btn-sm">{this.state.title[i]}</Link> 
                    </div>
                </div>
            </div>
        ))
    )
    render() {
        return (
            <div className="row mt-1">
                {this.imageTiles()}
            </div>
        )
    }
}
export default GraphImageTiles;