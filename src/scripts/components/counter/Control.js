import React from 'react';

const propTypes = {
	onPlus: React.PropTypes.func,
	onSubstract: React.PropTypes.func,
	onRandomizeColor: React.PropTypes.func,
};

function createWarning(funcName) {
	return () => console.warn(funcName + ' is not defined');
}

const defaultProps = {
	onPlus: createWarning('onPlus'),
	onSubstract: createWarning('onSubstract'),
	onRandomizeColor: createWarning('onRandomizeColor'),
};


class Control extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<button onClick={this.props.onPlus} >+</button>
				<button onClick={this.props.onSubstract} >-</button>
				<button onClick={this.props.onRandomizeColor} >Random Color</button>
			</div>
		);
	}
}

Control.propTypes = propTypes;
Control.defaultProps = defaultProps;

export default Control;