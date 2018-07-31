import React, { Component } from 'react';
import ImagesLoaded from '../../src/index';

const Image = ({ src, style }) => {
  return <img style={style} src={src} />;
};

export default class FullPackage extends Component {
  state = {
    images: [
      {
        src: 'http://via.placeholder.com/200x200'
      },
      {
        src: 'http://via.placeholder.com/200x200'
      },
      {
        src: 'http://via.placeholder.com/200x200'
      },
      {
        src: 'http://via.placeholder.com/200x200'
      }
    ]
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        images: [
          ...this.state.images,
          { src: 'http://via.placeholder.com/200x200' }
        ]
      });
    }, 3000);
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
      return <Image style={{ margin: 10 }} key={index} src={item.src} />;
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
