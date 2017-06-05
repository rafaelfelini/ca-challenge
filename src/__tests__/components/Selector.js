import React from 'react';
import { shallow } from 'enzyme';
import Selector from '../../components/Selector';

it('should renders without crashing', () => {
  shallow(<Selector items={['Foo', 'Bar']} name="mySelector" label="Foo bar" />);
});

it('should render a input with onChange event', () => {
  const onChange = jest.fn();
  const div = document.createElement('div');
  const field = shallow(<Selector items={['Foo', 'Bar']} name="mySelector" label="Foo bar" onChange={onChange}/>, div);

  field.find('select').simulate('change');

  expect(onChange).toBeCalled();
});
