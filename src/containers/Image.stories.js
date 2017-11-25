/* eslint
react/jsx-closing-bracket-location: 0,
react/jsx-closing-tag-location: 0 */

import React from 'react';
import PropTypes from 'prop-types';
// relative
import Tooltip from '../Tooltip';
import reactPNG from '../assets/react.png';
// css
import css from './Image.scss';

class Text extends React.Component {

	static propTypes = {
		side: PropTypes.string.isRequired,
	}

	state = {
		tooltipVisible: false,
	}

	hideTooltip = () => {
		if (this.state.tooltipVisible) this.setState({ tooltipVisible: false });
	}

	showTooltip = () => {
		if (!this.state.tooltipVisible) this.setState({ tooltipVisible: true });
	}

	render() {
		const style = {
			backgroundColor: 'white',
			marginLeft: '-42px',
		};
		const logo = (<img className={css.image} src={reactPNG} alt="React Logo" />);
		return (
			<div>
				<Tooltip
					message={logo}
					show={this.state.tooltipVisible}
					side={this.props.side}
					style={style}
					transition={this.state.tooltipVisible ? 'quick-short-delay' : 'rapid'}
				><span
					onMouseEnter={this.showTooltip}
					onMouseLeave={this.hideTooltip}
				>React
				</span>
				</Tooltip>
			</div>
		);
	}
}

export default Text;

