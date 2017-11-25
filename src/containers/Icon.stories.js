import React from 'react';
import PropTypes from 'prop-types';
// relative
import Tooltip from '../Tooltip';
// css
import css from './Icon.scss';

class Icon extends React.Component {

	static propTypes = {
		caretMargin: PropTypes.string,
		side: PropTypes.string.isRequired,
	}

	state = {
		tooltipVisible: false,
	}
	toggleTooltip = () => {
		this.setState((prevState) => {
			return { tooltipVisible: !prevState.tooltipVisible };
		});
	}

	render() {
		const { caretMargin, side } = this.props;
		const style = {
				backgroundColor: 'rgb(234, 208, 37)',
				color: 'rgb(56, 56, 56)',
				marginLeft: '-53px',
				marginBottom: '3px',
		};

		return (
			<div>
				<Tooltip
					caretMargin={caretMargin}
					message="Don't click me!"
					show={this.state.tooltipVisible}
					side={side}
					style={style}
				>
					<span
						className={css.infoCircle}
						onClick={this.toggleTooltip}
					>i
					</span>
				</Tooltip>
			</div>
		);
	}
}

Icon.defaultProps = {
	caretMargin: '0px 0px 0px 0px',
};

export default Icon;
