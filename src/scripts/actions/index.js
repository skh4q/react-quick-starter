import * as types from './ActionTypes';

export function setColor(color) {
	return {
		type: types.SET_COLOR,
		color
	}
}

export function increment() {
	return {
		type: types.INCREMENT
	}
}

export function decrement() {
	return {
		type: types.DECREMENT
	}
}