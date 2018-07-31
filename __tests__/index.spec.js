import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import ImagesLoaded from '../src/index';
import renderer from 'react-test-renderer';

describe('<ImagesLoaded />', () => {
  it('should render and work.', async () => {
    const done = jest.fn();
    const onAlways = jest.fn();
    const onFail = jest.fn();
    const onProgress = jest.fn();
    const onUpdate = jest.fn();

    const component = renderer.create(
      <ImagesLoaded
        done={done}
        onAlways={onAlways}
        onFail={onFail}
        onProgress={onProgress}
        onUpdate={onUpdate}
      >
        {['img1.jpg'].map((item, index) => <img key={index} src={item} />)}
      </ImagesLoaded>
    );

    expect(component.toJSON()).toMatchSnapshot();

    const instance = component.getInstance();
    const cWU = jest.spyOn(instance, 'componentWillUnmount');
    const cDU = jest.spyOn(instance, 'componentDidUpdate');

    component.update(
      <ImagesLoaded
        done={done}
        onAlways={onAlways}
        onFail={onFail}
        onProgress={onProgress}
        onUpdate={onUpdate}
      >
        {['img1.jpg', 'img2.jpg'].map((item, index) => (
          <img key={index} src={item} />
        ))}
      </ImagesLoaded>
    );

    expect(cDU).toHaveBeenCalled();

    component.unmount();

    expect(cWU).toHaveBeenCalled();
  });

  it('should render children', () => {
    const testChildren = ['div', 'section', 'img'];
    const component = ReactTestUtils.renderIntoDocument(
      <ImagesLoaded>
        {testChildren.map((item, index) => {
          return <div key={index} className={'child'} />;
        })}
      </ImagesLoaded>
    );

    const children = ReactTestUtils.scryRenderedDOMComponentsWithClass(
      component,
      'child'
    );

    expect(children.length).toEqual(3);
  });

  it('should set the correct default props', () => {
    const component = ReactTestUtils.renderIntoDocument(<ImagesLoaded />);

    const defaultProps = {
      className: 'images-loaded-container',
      elementType: 'div',
      background: false
    };

    expect(component.props).toEqual(defaultProps);
  });

  it('should render with the correct elementType', () => {
    const defaultComponent = ReactTestUtils.renderIntoDocument(
      <ImagesLoaded />
    );

    const componentWithList = ReactTestUtils.renderIntoDocument(
      <ImagesLoaded elementType={'ul'} />
    );

    expect(
      ReactTestUtils.scryRenderedDOMComponentsWithTag(defaultComponent, 'div')
        .length
    ).toBeTruthy();

    expect(
      ReactTestUtils.scryRenderedDOMComponentsWithTag(componentWithList, 'ul')
        .length
    ).toBeTruthy();

    expect(
      ReactTestUtils.scryRenderedDOMComponentsWithTag(
        componentWithList,
        'section'
      ).length
    ).toBeFalsy();
  });
});
