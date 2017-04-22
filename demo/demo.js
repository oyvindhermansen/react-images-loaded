import React, { Component } from 'react';
import { render } from 'react-dom';
import ImagesLoaded from '../src/index';

class App extends Component {

  handleOnAlways = (instance) => {
    console.log('ALWAYS - all images have been loaded');
  }

  handleDone = () => {
    console.log('DONE  - all images have been successfully loaded');
  }

  handleOnFail = () => {
    console.log('FAIL - all images loaded, at least one is broken');
  }

  handleOnProgress = (instance, image) => {
    const result = image.isLoaded ? 'loaded' : 'broken';
    console.log( 'image is ' + result + ' for ' + image.img.src );
  }

  render() {
    return (
      <div>
        This is demo 2
        <ImagesLoaded
          elementType={'div'}
          onAlways={this.handleOnAlways}
          done={this.handleDone}
          onFail={this.handleOnFail}
          onProgress={this.handleOnProgress}
          className={'My-new-class'}
        >
          <img src="https://media.licdn.com/mpr/mpr/shrinknp_800_800/AAEAAQAAAAAAAAfUAAAAJGI4Mjg4ZDcwLWE1MDUtNDU2My04ODI5LTIzYTM1NzUxZDM5Yg.jpg" />
          <img src="https://media.licdn.com/mpr/mpr/shrinknp_800_800/AAEAAQAAAAAAAAfUAAAAJGI4Mjg4ZDcwLWE1MDUtNDU2My04ODI5LTIzYTM1NzUxZDM5Yg.jpg" />
          <img src="https://media.licdn.com/mpr/mpr/shrinknp_800_800/AAEAAQAAAAAAAAfUAAAAJGI4Mjg4ZDcwLWE1MDUtNDU2My04ODI5LTIzYTM1NzUxZDM5Yg.jpg" />
        </ImagesLoaded>
      </div>
    )
  }
}

render(<App />, document.getElementById('root'));
