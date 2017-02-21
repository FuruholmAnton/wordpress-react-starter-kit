import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Redirect } from 'react-router';
import history from './history.js';
import HomePage from './routes/home/Home.js';
import AboutPage from './routes/about/About.js';
import App from './app.js';

// render( <App/>, document.getElementById('app'));

render((
	<Router history={history}>
		<Route path="/" component={App}>
			<IndexRoute component={HomePage} />
			<Route path="about" component={AboutPage} />
			<Redirect from="*" to="/" />
		</Route>
	</Router>
), document.getElementById('app'));