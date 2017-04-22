import React, { Component } from 'react';
import { render } from 'react-dom';
import ImagesLoaded from '../src/index';

class App extends Component {
  render() {
    return (
      <div>
        This is demo 2
        <ImagesLoaded>
          <img src="" />
          <img src="" />
          <img src="" />
        </ImagesLoaded>
      </div>
    )
  }
}

render(<App />, document.getElementById('root'));
