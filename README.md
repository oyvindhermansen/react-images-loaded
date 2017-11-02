# React imagesLoaded

React bindings for [imagesLoaded](http://imagesloaded.desandro.com) event system

[![Build Status](https://travis-ci.org/oyvindhermansen/react-images-loaded.svg?branch=master)](https://travis-ci.org/oyvindhermansen/react-images-loaded)

## Events

```
onAlways(instance)

onProgress(instance, image)

onFail(instance)

done(instance)
```



## Example usage

```js
// ES6 imports
import ImagesLoaded from 'react-images-loaded';

// ES5 require
const ImagesLoaded = require('react-images-loaded');
```

```js

class App extends Component {
  handleOnAlways = (instance) => {

  }

  handleOnProgress = (instance, image) => {

  }

  handleOnFail = (instance) => {

  }

  handleDone = (instance) => {

  }

  render() {
    return (
      <ImagesLoaded
        elementType={"ul"} // defaults to 'div'
        className={"your-container-class"} // defaults to 'images-loaded-container'
        onAlways={this.handleOnAlways}
        onProgress={this.handleOnProgress}
        onFail={this.handleOnFail}
        done={this.handleDone}
        background='.image' // true or child selector
      >
        {/* Your images */}
      </ImagesLoaded>
    );
  }
}
```

## Install for local development
Defaulting to yarn, but npm works just as well.

```
$ git clone https://github.com/oyvindhermansen/react-images-loaded.git
$ cd react-images-loaded
$ yarn install
```

#### Local development
This project is using webpack for development. Just run `yarn demo` and it will fire up a dev server with hot module reloading between `/demo/demo.js` and `/src/index.js`. This way it gets super simple to test the code you are writing.

#### Testing
This project is using `jest` as testing framework.

`yarn test` for running the tests one time.
`yarn test:watch` for running tests in watch mode

#### Code formatting
This package is using `prettier` as code formatter. Just write your code, and prettier will take care of the formatting when you commit your changes.

#### Contribute

Feel free to make pull requests or issues if something doesn't work or could be better :)
