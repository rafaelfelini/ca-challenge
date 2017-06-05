import React from 'react';
import { shallow } from 'enzyme';
import VehiclesTable from '../../components/VehiclesTable';

it('should renders without crashing', () => {
  shallow(<VehiclesTable />);
});
