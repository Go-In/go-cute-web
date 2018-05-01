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
import Card from './components/Card';
import Following from './components/graphs/Following';
import './App.css';

const menu = [
  'Following',
  'Like',
  'Comment'
]

class App extends Component {
  state = {
    menu: 0,
  }
  onChangeMenu = (i) => () => {
    this.setState({
      menu: i,
    })
  }
  render() {
    return (
      <div className="App mt-3 mb-3">
        <div className="container">

          <nav className=" mb-3 nav nav-pills nav-justified">
            {
              menu.map((m, index) => (
                <span
                  key={m}
                  className={`nav-link ${index === this.state.menu && 'active'}`}
                  onClick={this.onChangeMenu(index)}
                >
                  {m}
                </span>
              ))
            }
          </nav>
          <Card
            title="Following Relation"
            description="dfsdfsdfsdf"
          >
            <Following />
          </Card>
        </div>
      </div>
    );
  }
}

export default App;
