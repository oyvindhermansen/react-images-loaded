import React, { Component } from 'react';
import { render } from 'react-dom';
import ImagesLoaded from '../src/index';

const Image = ({ src }) => {
  return (
    <div
      style={{
        display: 'inline-block',
        width: '200px',
        padding: '10px',
        backgroundImage: `url('${src}')`,
        height: '200px',
        margin: '20px 5px'
      }}
    />
  )
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        { src: 'https://media.licdn.com/mpr/mpr/shrinknp_800_800/AAEAAQAAAAAAAAfUAAAAJGI4Mjg4ZDcwLWE1MDUtNDU2My04ODI5LTIzYTM1NzUxZDM5Yg.jpg' },
        { src: 'https://media.licdn.com/mpr/mpr/shrinknp_800_800/AAEAAQAAAAAAAAfUAAAAJGI4Mjg4ZDcwLWE1MDUtNDU2My04ODI5LTIzYTM1NzUxZDM5Yg.jpg' },
        { src: 'https://media.licdn.com/mpr/mpr/shrinknp_800_800/AAEAAQAAAAAAAAfUAAAAJGI4Mjg4ZDcwLWE1MDUtNDU2My04ODI5LTIzYTM1NzUxZDM5Yg.jpg' },
        { src: 'https://media.licdn.com/mpr/mpr/shrinknp_800_800/AAEAAQAAAAAAAAfUAAAAJGI4Mjg4ZDcwLWE1MDUtNDU2My04ODI5LTIzYTM1NzUxZDM5Yg.jpg' }
      ]
    }
  }

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

  renderImages() {
    const { images } = this.state;
    return images.map((item, index) => {
      return (
        <Image key={index} src={item.src} />
      )
    })
  }

  addImage = () => {
    this.setState({
      images: [
        ...this.state.images,
        {
          src: "https://media.licdn.com/mpr/mpr/shrinknp_800_800/AAEAAQAAAAAAAAfUAAAAJGI4Mjg4ZDcwLWE1MDUtNDU2My04ODI5LTIzYTM1NzUxZDM5Yg.jpg"
        }
      ]
    })
  }

  render() {
    const btnStyle = {
      border: 0,
      background: 'salmon',
      color: 'black',
      padding: '10px 30px',
    };

    const containerStyles = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'
    }

    return (
      <div style={containerStyles}>
        <button onClick={this.addImage} style={btnStyle}>Add image</button>
        <ImagesLoaded
          elementType={'div'}
          onAlways={this.handleOnAlways}
          done={this.handleDone}
          onFail={this.handleOnFail}
          onProgress={this.handleOnProgress}
          className={'My-new-class'}
        >
          {this.renderImages()}
        </ImagesLoaded>
      </div>
    )
  }
}

render(<App />, document.getElementById('root'));
