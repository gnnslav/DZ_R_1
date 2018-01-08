import React from 'react';
import Header from 'components/Header';
import Cont from 'components/Cont';
import Sidebar from 'components/Sidebar';
import './style.css';

class App extends React.Component {
	render() {
		return(
			<div>
				<Header />
				<div className="Wrapper">
					<Cont />
					<Sidebar />
				</div>
			</div>
			
		);
	}
}

export default App;