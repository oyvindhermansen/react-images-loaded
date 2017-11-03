import React, { Component } from 'react';
import { render } from 'react-dom';
import ImagesLoaded from '../src/index';

const Image = ({ src }) => {
  return <img src={src} />;
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        {
          src: 'https://media.licdn.com/mpr/mpr/shrinknp_800_800/AAEAAQAAAAAAAAfUAAAAJGI4Mjg4ZDcwLWE1MDUtNDU2My04ODI5LTIzYTM1NzUxZDM5Yg.jpg'
        },
        {
          src: 'https://media.licdn.com/mpr/mpr/shrinknp_800_800/AAEAAQAAAAAAAAfUAAAAJGI4Mjg4ZDcwLWE1MDUtNDU2My04ODI5LTIzYTM1NzUxZDM5Yg.jpg'
        },
        {
          src: 'https://media.licdn.com/mpr/mpr/shrinknp_800_800/AAEAAQAAAAAAAAfUAAAAJGI4Mjg4ZDcwLWE1MDUtNDU2My04ODI5LTIzYTM1NzUxZDM5Yg.jpg'
        },
        {
          src: 'https://media.licdn.com/mpr/mpr/shrinknp_800_800/AAEAAQAAAAAAAAfUAAAAJGI4Mjg4ZDcwLWE1MDUtNDU2My04ODI5LTIzYTM1NzUxZDM5Yg.jpg'
        }
      ]
    };
  }

  handleOnAlways = instance => {
    console.log('ALWAYS - all images have been loaded');
  };

  handleDone = () => {
    console.log('DONE  - all images have been successfully loaded');
  };

  handleOnFail = () => {
    console.log('FAIL - all images loaded, at least one is broken');
  };

  handleOnProgress = (instance, image) => {
    const result = image.isLoaded ? 'loaded' : 'broken';
    console.log('image is ' + result + ' for ' + image.img.src);
  };

  renderImages() {
    const { images } = this.state;
    return images.map((item, index) => {
      return <Image key={index} src={item.src} />;
    });
  }

  render() {
    const containerStyles = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'
    };

    return (
      <div style={containerStyles}>
        <ImagesLoaded
          elementType={'div'}
          onAlways={this.handleOnAlways}
          done={this.handleDone}
          onFail={this.handleOnFail}
          onProgress={this.handleOnProgress}
          className={'My-new-class'}
          background={'.hey'}
        >
          {this.renderImages()}
        </ImagesLoaded>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
