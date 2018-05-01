import React, { Component } from 'react';
import {
  Sigma,
  LoadGEXF,
  LoadJSON,
  RandomizeNodePositions,
  RelativeSize,
  Filter,
} from 'react-sigma';
import ForceLink from 'react-sigma/lib/ForceLink'

class App extends Component {
  state = {
    selectedNode: null,
  }
  onClickNode = (e) => {
    this.setState({
      selectedNode: e.data.node.id
    })
  }
  onClearNode = () => {
    this.setState({
      selectedNode: null
    })
  }
  render() {
    return (
      <div>
        <div className="graph-wrapper mb-3">
          <Sigma
            onClickNode={this.onClickNode}
            style={{
              height: '600px',
            }}
          >
            <LoadGEXF path={`${process.env.PUBLIC_URL}/following_small6.gefx`}>
              <RandomizeNodePositions>
                <ForceLink
                  iterationsPerRender={1}
                  easing="cubicInOut"
                  timeout={10000}
                />
                <RelativeSize initialSize={15}/>
                <Filter neighborsOf={ this.state.selectedNode } />
              </RandomizeNodePositions>
            </LoadGEXF>
          </Sigma>
        </div>
        <button className="btn btn-secondary" onClick={this.onClearNode}>Clear</button>
      </div>
    );
  }
}

export default App;
