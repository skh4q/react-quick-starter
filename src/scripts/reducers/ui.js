import * as types from '../actions/ActionTypes';


const initState = {
	color: [255, 255, 255]
};

export default function ui(state = initState, action) {

	switch(action.type) {
		case types.SET_COLOR: 
			return {
				color: action.color
			}

		default:
			return state;
	}
}