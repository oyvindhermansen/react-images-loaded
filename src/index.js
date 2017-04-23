import React, { Component } from 'react';
import PropTypes from 'prop-types';
import imagesLoaded from 'imagesloaded';
import omit from 'lodash.omit';

export default class ImagesLoaded extends Component {
  componentDidMount() {
    // add events
    const { onAlways, done, onFail, onProgress } = this.props;
    const { elemContainer } = this.refs;

    /* Initializing imagesLoaded */
    this.imagesLoaded = imagesLoaded(elemContainer);

    this.imagesLoaded.on('always', onAlways);
    this.imagesLoaded.on('done', done);
    this.imagesLoaded.on('fail', onFail);
    this.imagesLoaded.on('progress', onProgress);
  }

  componentWillUnmount() {
    const { onAlways, done, onFail, onProgress } = this.props;

    this.imagesLoaded.off('always', onAlways);
    this.imagesLoaded.off('done', done);
    this.imagesLoaded.off('fail', onFail);
    this.imagesLoaded.off('progress', onProgress);
  }

  render() {
    const { children } = this.props;
    const props = omit(this.props, Object.keys(propTypes));

    return (
      <this.props.elementType ref={'elemContainer'} {...props}>
        {children}
      </this.props.elementType>
    );
  }
}

ImagesLoaded.defaultProps = {
  elementType: 'div',
  className: 'images-loaded-container'
};

const propTypes = {
  elementType: PropTypes.string,
  onAlways: PropTypes.func,
  done: PropTypes.func,
  onFail: PropTypes.func,
  onProgress: PropTypes.func
};
