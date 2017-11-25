/* eslint
no-unused-vars: 0,
react/jsx-closing-bracket-location: 0,
react/jsx-closing-tag-location: 0 */

import React from 'react';
import PropTypes from 'prop-types';
// relative
import Tooltip from '../Tooltip';
// css

class Text extends React.Component {

	static propTypes = {
		caretMargin: PropTypes.string,
		marginTop: PropTypes.string,
		repeat: PropTypes.oneOfType([
			PropTypes.number,
			PropTypes.string,
		]),
		side: PropTypes.string.isRequired,
	}

	state = {
		tooltipVisible: false,
	}

	assembleMessage = (string, repeat) => {
		return [...Array(repeat)].map(dummy => string).join(' ');
	}

	hideTooltip = () => {
		if (this.state.tooltipVisible) this.setState({ tooltipVisible: false });
	}

	showTooltip = () => {
		if (!this.state.tooltipVisible) this.setState({ tooltipVisible: true });
	}

	render() {
		const { caretMargin, marginTop, repeat, side } = this.props;
		const { tooltipVisible } = this.state;
		const style = {
			backgroundColor: 'rgb(60, 130, 242)',
			color: 'rgb(242, 241, 239)',
			marginTop,
		};
		return (
			<div>
				<Tooltip
					caretMargin={caretMargin}
					message={this.assembleMessage('Tooltip of the text', repeat)}
					show={tooltipVisible}
					side={side}
					style={style}
					transition={tooltipVisible ? 'short-delay' : 'rapid'}
				><span
					onMouseEnter={this.showTooltip}
					onMouseLeave={this.hideTooltip}
				>Text with Tooltip
				</span>
				</Tooltip>
			</div>
		);
	}
}

Text.defaultProps = {
	caretMargin: '0px 0px 0px 0px',
	marginTop: '0px',
	repeat: 1,
};

export default Text;

