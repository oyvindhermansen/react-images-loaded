import React, { Component } from 'react';
import ImagesLoaded from '../../src/index';

const Image = ({ src, style }) => {
  return <img style={style} src={src} />;
};

export default class OnAlways extends Component {
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
    ],
    isComplete: false
  };

  handleOnAlways = instance => {
    this.setState({
      isComplete: instance.isComplete
    });
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

    const { isComplete } = this.state;

    return (
      <div style={containerStyles}>
        <ImagesLoaded onAlways={this.handleOnAlways}>
          {this.renderImages()}
          {isComplete && <h2>All images are complete</h2>}
        </ImagesLoaded>
      </div>
    );
  }
}
