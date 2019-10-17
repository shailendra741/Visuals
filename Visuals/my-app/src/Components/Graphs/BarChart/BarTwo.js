import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BarChartImg2 from '../../GraphImages/BarChartImages/CircularBarChart.png';

class BarTwo extends Component {
    render() {
        return (
            <div className="card hoverable mb-4">
                <img className="card-img-top" src={BarChartImg2} alt="" style={{height:180}}/>
                <div className="card-body">
                    <h5 className="card-title">Gradient BarChart</h5>
                    <p className="card-text">Its a simple bat chart for showing levels of your business click below to know more about this.</p>
                    <Link to="#" className="btn btn-outline-primary waves-effect btn-sm">Gradient BarChart</Link> 
                </div>
            </div>
        );
    }
}

export default BarTwo;