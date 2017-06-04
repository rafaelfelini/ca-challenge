import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Header from '../components/Header';
import '../index.css';

storiesOf('Header', module)
  .add('default', () => (
    <Header />
  ));
