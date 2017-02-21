"use strict";

import React from 'react';
import { Link, IndexLink } from 'react-router';

var activeClassName = 'active';

/**
 * Header navigation bar
 */
var Header = React.createClass({
	componentDidMount: function() {
		console.log('Header.js');
	},
	render: function() {
		return (
			<nav className="navbar navbar-inverse">
				<div id="navbar" className="navbar-collapse collapse">
					<ul className="nav navbar-nav">
						<li><Link to="/" activeClassName={activeClassName}>Home</Link></li>
						<li><Link to="/about" activeClassName={activeClassName}>About</Link></li>
					</ul>
				</div>
			</nav>
		);
	}
});

export default Header;