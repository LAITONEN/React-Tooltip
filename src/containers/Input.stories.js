import React from 'react';
import PropTypes from 'prop-types';
// relative
import Tooltip from '../Tooltip';
// css
import css from './Input.scss';

class Input extends React.Component {

	static propTypes = {
		caretMargin: PropTypes.string,
		side: PropTypes.string.isRequired,
	}

	state = {
		correct: false,
		tooltipVisible: false,
	}

	hideTooltip = () => {
		if (this.state.tooltipVisible) this.setState({ tooltipVisible: false });
	}

	showTooltip = () => {
		if (!this.state.tooltipVisible) this.setState({ tooltipVisible: true });
	}

	validatePassword = (e) => {
		const { correct } = this.state;
		const lowerCaseValue = e.target.value.toLowerCase();
		if (lowerCaseValue.length > 4 && lowerCaseValue !== e.target.value) {
			this.setState({ correct: true, tooltipVisible: true });
			setTimeout(() => this.setState({ tooltipVisible: false }), 1000);
		} else if (correct) this.setState({ correct: false, tooltipVisible: true });
	}

    render() {
    	const { correct, tooltipVisible } = this.state;
    	const { caretMargin, side } = this.props;
		const message = correct ? 'Good!' : 'At least 5 characters, including 1 upper case.';
		const style = {
			backgroundColor: correct ? 'rgb(114, 216, 49)' : 'rgb(209, 26, 6)',
			color: correct ? 'rgb(56, 56, 56)' : 'rgb(242, 241, 239)',
			marginLeft: '12px',
		};
        return (
			<div>
				<label>Password&nbsp;
					<Tooltip
						caretMargin={caretMargin}
						message={message}
						show={tooltipVisible}
						side={side}
						style={style}
					>
						<input
							className={css.input}
							onBlur={this.hideTooltip}
							onChange={this.validatePassword}
							onSelect={this.showTooltip}
							type="password"
						/>
					</Tooltip>
				</label>
			</div>
        );
    }
}

Input.defaultProps = {
	caretMargin: '0px 0px 0px 0px',
};

export default Input;

