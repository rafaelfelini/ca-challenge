import React from 'react';
import { shallow } from 'enzyme';
import Button from '../../components/Button';

it('renders without crashing', () => {
  const div = document.createElement('div');
  shallow(<Button />, div);
});
