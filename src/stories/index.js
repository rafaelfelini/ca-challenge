import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Button from '../components/Button';
import Field from '../components/Field';
import Selector from '../components/Selector';
import Header from '../components/Header';
import VehiclesTable from '../components/VehiclesTable';
import '../index.css';
import setup from './setup.json';

storiesOf('Header', module)
  .add('Default', () => (
    <Header />
  ));

storiesOf('Button', module)
  .add('Primary', () => (
    <Button onClick={action('Primary Button clicked')} label="Button Component"/>
  ))
  .add('Secondary', () => (
    <Button onClick={action('Secondary Button clicked')} appearance="secondary" label="Button Component"/>
  ));

storiesOf('Field', module)
  .add('Primary', () => (
    <Field name="myField" onInput={action('Field changed')} label="My Field" placeholder="Field Component"/>
  ));

storiesOf('Selector', module)
  .add('Primary', () => (
    <Selector items={['Foo', 'Bar']} name="mySelector" onChange={action('Selector changed')} label="My Selector"/>
  ));

storiesOf('VehiclesTable', module)
  .add('Default', () => (
    <VehiclesTable data={setup.VehiclesTableData} />
  ));
