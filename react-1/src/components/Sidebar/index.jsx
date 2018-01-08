import React from 'react';
import './style.css';

class Sidebar extends React.Component {
	render() {
		return(
			<div className="Sidebar">
				<div className="Search">
					<p>Title</p>
					<input className="Input" />
				</div>
				<div className="Search">
					<p>Description</p>
					<textarea className="Description"></textarea>
				</div>
				<div className="Search">
					<p>Rating</p>
					<input className="Input" />
				</div>
				<div className="Search-btn">
					<button className="Button">Submit</button>
				</div>

			</div>
		);
	}
}

export default Sidebar;