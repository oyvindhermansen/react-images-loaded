import React from 'react';
import { storiesOf } from '@storybook/react';
import FullPackage from './variants/FullPackage';
import OnAlways from './variants/OnAlways';
import OnProgress from './variants/OnProgress';

storiesOf('ImagesLoaded', module).add('Full package', () => <FullPackage />);
storiesOf('ImagesLoaded', module).add('On always', () => <OnAlways />);
storiesOf('ImagesLoaded', module).add('On progress', () => <OnProgress />);
