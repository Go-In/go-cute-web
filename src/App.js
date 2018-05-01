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
import Comment from './components/graphs/Comment';
import './App.css';

const menu = [
  'Following',
  // 'Like',
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
          {
            this.state.menu === 0 &&
            <Card
              title="Following Relation"
              description = "ข้อมูล Network Graph แสดงถึมความสัมพันธ์ของ user ในกลุ่มที่เราสนใจ ว่ามีผู้ใด follow บ้าง โดยเราได้ตัด Node ที่มีน้ำหนักน้อยออกเพื่อให้แสดงผลได้ไเร็วขึ้น"
            >
              <Following />
            </Card>
          }
          {
            this.state.menu === 1 &&
            <Card
              title="Comment Relation"
              description = "ข้อมูล Network Graph แสดงถึงความสัมพันธ์ของ user ที่มา comment user ที่เราสนใจ โดยเราได้ตัด Node ที่มีน้ำหนักน้อยออกเพื่อให้แสดงผลได้ไเร็วขึ้น"
            >
              <Comment />
            </Card>
          }
        </div>
      </div>
    );
  }
}

export default App;
