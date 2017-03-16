import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';
import '../styles/master.scss';
import App from './components/App';

const store = createStore(reducers);

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>
, document.getElementById('app'));