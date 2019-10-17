import React, { Component } from 'react';
import SelectDropdown from './SelectDropdown';
import GraphImageTiles from '../Graphs/BarChart/GraphImageTiles';
import BarTwo from '../Graphs/BarChart/BarTwo';
import WorldCloud from '../GraphImages/BarChartImages/worldcloud.PNG';
import WorldCloudNew from '../GraphImages/BarChartImages/wdc.PNG';


class Home extends Component {

    state={
        displayData: ''
    }

    handleChange = e => {
        this.setState({
            displayData: e.target.value
        })
    }

    render() {
        const { displayData } = this.state;
        const dropdownValues = [
            {
                name: 'Bar Chart',
                value: 'barChart'
            },
            {
                name: 'Line Chart',
                value: 'lineChart'
            },
            {
                name: 'Radial Bar Chart',
                value: 'radialBarChart'
            }
        ]
        return (
            <div className="container-fluid" style={{padding: 5}}>
                <SelectDropdown 
                    dropdownValues={dropdownValues} 
                    change={e => this.handleChange(e)}
                />
                {
                    displayData === '' ?
                        <div className="d-flex justify-content-between" >
                            <img src={WorldCloud} className="img1"></img>
                            <img src={WorldCloudNew}  className="img1"></img>
                        </div>
                    : displayData === 'barChart' ?
                        <GraphImageTiles />
                    :
                        null
                }
            </div>
        );
    }
}

export default Home;