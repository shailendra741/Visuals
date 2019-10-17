import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BarChartImg1 from '../../GraphImages/BarChartImages/BarChart.png';


class GradientbarChart extends Component {
    render() {
        return (
            <div className="col-md-3">
                <div className="card hoverable mb-4">
                    <img className="card-img-top" src={BarChartImg1} alt="" />
                    <div className="card-body">
                        <h5 className="card-title">Gradient BarChart</h5>
                        <p className="card-text">Its a simple bat chart for showing levels of your business click below to know more about this.</p>
                        <Link to="/gradientBarChart" className="btn btn-outline-primary waves-effect btn-sm">Gradient BarChart</Link> 
                    </div>
                </div>
            </div>
        );
    }
}

export default GradientbarChart;