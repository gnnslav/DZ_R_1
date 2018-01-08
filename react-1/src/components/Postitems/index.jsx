import React from 'react';

import './style.css';
import picture from './1.jpg';

class Postitems extends React.Component {
	render() {
		const {title, boxcont, rating} = this.props;
		return(
			<div className="Box">
				<div className="Post__delete">Delete</div>
				<div>
					<img src={picture} alt="Flowers" className="Post__img" />
				</div>
				<div className="Post__title">{title}</div>
				<div className="Post__boxcont">{boxcont}</div>
				<div className="Post__rating">Rating:{rating}</div>
			</div>
		);
	}
}



export default Postitems;
