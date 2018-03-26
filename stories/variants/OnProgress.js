import React, { Component } from 'react';
import ImagesLoaded from '../../src/index';

const Image = ({ src, style }) => {
  return <img style={style} src={src} />;
};

export default class OnProgress extends Component {
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

  handleOnProgress = instance => {
    if (instance.progressedCount > 1) {
      this.setState({
        isComplete: true
      });
    } else {
      this.setState({
        isComplete: false
      });
    }
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
        <ImagesLoaded onProgress={this.handleOnProgress}>
          {this.renderImages()}
          {isComplete ? <h2>Done loading</h2> : <h2>Loading images....</h2>}
        </ImagesLoaded>
      </div>
    );
  }
}
