import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Home from './Components/Home/Home';
import Layout from './Layout';
import GradientbarChart from './Components/GraphDisplay/BarChartDisplay/GradientbarChart';
import CircularBarChart from './Components/GraphDisplay/CircularBarChart/CircularBarChart';
import GroupBarChart from './Components/GraphDisplay/GroupBarChart/GroupBarChart';
import RadialBarChart from './Components/GraphDisplay/RadialBarChart/RadialBarChart';

class App extends Component {
  state = {
    name: "Anantha"
  }
  render() {
    return (
      
        <Layout>
          <Route exact path="/" component={Home} />
          <Route path="/gradientBarChart" component={GradientbarChart} />
          <Route path="/circularBarChart" component={CircularBarChart} />
          <Route path="/groupBarChart" component={GroupBarChart} />
          <Route path="/radialBarChart" component={RadialBarChart} />
        </Layout>

      
    );
  }
}

export default App;