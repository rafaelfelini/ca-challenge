import React from 'react';
import { shallow } from 'enzyme';
import Field from '../../components/Field';

it('renders without crashing', () => {
  shallow(<Field name="myField"  placeholder="Foo bar" />);
});

it('onInput property', () => {
  const onInput = jest.fn();
  const div = document.createElement('div');
  const field = shallow(<Field name="myField" placeholder="Foo bar" onInput={onInput}/>, div);

  field.find('input').simulate('input', { which: 'Foo value' });

  expect(onInput).toBeCalled();
});
