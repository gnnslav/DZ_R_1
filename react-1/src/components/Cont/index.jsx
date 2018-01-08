import React from 'react';
import Postitems from 'components/Postitems';
import posts from '../Post';
import './style.css';

class Cont extends React.Component {
	render() {
		const posters = posts.map(post =><Postitems key={post.id} {...post} />);

		return(
			<div className="Content">
				{posters}
			</div>
		);
	}
}

export default Cont;