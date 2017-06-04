import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Button from '../components/Button';
import Header from '../components/Header';
import '../index.css';

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
