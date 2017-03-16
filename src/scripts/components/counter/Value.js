import React from 'react';


const propTypes = {
	number: React.PropTypes.number
};

const defaultProps = {
	number: -1
};


class Value extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>{this.props.number}</div>
		);
	}
}

Value.propTypes = propTypes;
Value.defaultProps = defaultProps;

export default Value;