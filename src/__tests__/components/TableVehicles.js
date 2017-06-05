import React from 'react';
import { shallow } from 'enzyme';
import TableVehicles from '../../components/TableVehicles';

it('should renders without crashing', () => {
  shallow(<TableVehicles />);
});
