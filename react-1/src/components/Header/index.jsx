import React from 'react';
import './style.css';

class Header extends React.Component {
	render() {
		return(
			<div className="Header">
				<div className="Header-item">
					<h1>Movie mate</h1>
				</div>
				<div className="Header-item">
					<button className="Nav">ABOUT</button>
					<button className="Nav">BROWSE</button>
					<button className="Nav">LOGIN</button>
				</div>
					<div className="Line"></div>
			</div>
		);
	}
}

export default Header;
