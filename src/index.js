import React from 'react';
import { storiesOf } from '@storybook/react';

import Text from './containers/Text.stories';
import Input from './containers/Input.stories';
import Icon from './containers/Icon.stories';
import Image from './containers/Image.stories';

storiesOf('Tooltip', module)
	.addDecorator(story => (
		<div style={{ marginTop: 60, textAlign: 'center' }}>
			{story()}
		</div>
	))
	.add('Text-hover-top-tooltip', () => (
		<Text side="top" />
	))
	.add('Text-hover-right-tooltip', () => (
		<Text caretMargin="5px 0px 0px 0px" marginTop="-10px" repeat={2} side="right" />
	))
	.add('Text-hover-bottom-tooltip', () => (
		<Text repeat={4} side="bottom" />
	))
	.add('Text-hover-left-tooltip', () => (
		<Text caretMargin="18px 0px 0px 0px" marginTop="-45px" repeat={6} side="left" />
	))
	.add('Input-select-bottom-tooltip', () => (
		<Input side="bottom" />
	))
	.add('Icon-click-top-tooltip', () => (
		<Icon side="top" />
	))
	.add('Text-hover-image-bottom-tooltip', () => (
		<Image side="bottom" />
	));
