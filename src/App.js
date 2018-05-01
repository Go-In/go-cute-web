import React, { Component } from 'react';
import {
  Sigma,
  LoadGEXF,
  RandomizeNodePositions,
  RelativeSize,
} from 'react-sigma';
import ForceLink from 'react-sigma/lib/ForceLink'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  onOverNode = (e) => {
    console.log("Mouse over node: " + e.data.node.label);
  }
  render() {
    return (
      <div className="App">
        <div className="graph-wrapper">
          <Sigma
            onOverNode={this.onOverNode}
          >
            <LoadGEXF path={`${process.env.PUBLIC_URL}/following_small.gefx`}>
              <RandomizeNodePositions>
                <ForceLink iterationsPerRender={1} background={true} easing="cubicInOut" timeout={5000}/>
                <RelativeSize initialSize={15}/>
              </RandomizeNodePositions>
            </LoadGEXF>
          </Sigma>
        </div>
      </div>
    );
  }
}

export default App;
