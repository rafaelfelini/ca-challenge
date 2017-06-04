import React from 'react';
import { shallow } from 'enzyme';
import Button from '../../components/Button';

it('renders without crashing', () => {
  shallow(<Button label="Foo bar" />);
});

it('with click event - render a `button` element', () => {
  const div = document.createElement('div');
  const onClick = jest.fn();
  const button = shallow(<Button label="Foo bar" onClick={onClick}/>, div);

  button.simulate('click');

  expect(onClick).toBeCalled();
});

it('with url property - render a `Link` component (react-router)', () => {
  const div = document.createElement('div');
  const button = shallow(<Button label="Foo bar" url='foo/bar'/>, div);


  expect(button.prop('to')).toEqual('foo/bar');
});
