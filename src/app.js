import React from 'react';
import {} from './style.scss';
import Header from './components/header/Header.js';

export default class App extends React.Component {
	
	componentDidMount() {
		console.log('App.js');
	}
	
  render() {
    return (
      <div>
      	<Header/>
        <div className="container">
					<div className="">
						{this.props.children}
					</div>
				</div>
      </div>
    )
  }
}