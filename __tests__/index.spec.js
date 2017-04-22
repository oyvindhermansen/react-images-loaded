import React from 'react';
import { render } from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import ImagesLoaded from '../src/index';

describe('ImagesLoaded Component', () => {

  it('should render without crashing', () => {
    const mountNode = document.createElement('div');
    render(<ImagesLoaded />, mountNode);
  })

  it('should render children', () => {
    const testChildren = [ 'div', 'section', 'img' ];
    const component = ReactTestUtils.renderIntoDocument(
      <ImagesLoaded>
        {
          testChildren.map((item, index) => {
            return (
              <div key={index} className={"child"}></div>
            )
          })
        }
      </ImagesLoaded>
    );

    const children = ReactTestUtils.scryRenderedDOMComponentsWithClass(
      component,
      'child'
    )

    expect(children.length).toEqual(3);

  })

  it('should set the correct default props', () => {
    const component = ReactTestUtils.renderIntoDocument(<ImagesLoaded/>);

    const defaultProps = {
      className: 'images-loaded-container',
      elementType: 'div'
    };

    expect(component.props).toEqual(defaultProps);
  })

  it('should render with the correct elementType', () => {
    const defaultComponent = ReactTestUtils.renderIntoDocument(
      <ImagesLoaded />
    );

    const componentWithList = ReactTestUtils.renderIntoDocument(
      <ImagesLoaded elementType={"ul"} />
    );

    expect(
      ReactTestUtils.scryRenderedDOMComponentsWithTag(
        defaultComponent,
        'div'
      ).length
    ).toBeTruthy()

    expect(
      ReactTestUtils.scryRenderedDOMComponentsWithTag(
        componentWithList,
        'ul'
      ).length
    ).toBeTruthy()

    expect(
      ReactTestUtils.scryRenderedDOMComponentsWithTag(
        componentWithList,
        'section'
      ).length
    ).toBeFalsy()
  })

  it('should render with the correct className', () => {
    const defaultComponent = ReactTestUtils.renderIntoDocument(
      <ImagesLoaded />
    );

    const customComponentClass = ReactTestUtils.renderIntoDocument(
      <ImagesLoaded className={"my-custom-class"} />
    );

    expect(
      ReactTestUtils.scryRenderedDOMComponentsWithClass(
        defaultComponent,
        'images-loaded-container'
      ).length
    ).toBeTruthy()

    expect(
      ReactTestUtils.scryRenderedDOMComponentsWithClass(
        customComponentClass,
        'my-custom-class'
      ).length
    ).toBeTruthy()

  })

})
