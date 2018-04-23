import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			hidden: false,
		};
	}

	componentDidMount() {

	}
	
	render() {
		return (
			<div className="component-container">
					<div className="overview-header">
						<div className="component-icon">
							<svg viewBox="0 0 24 24">
								<g>
									<g>
										<path d="M19,3v18H5V3H19 M19,1H5C3.9,1,3,1.9,3,3v18c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V3C21,1.9,20.1,1,19,1L19,1z"></path>
									</g>
										<path d="M16,15H8c-0.5,0-1-0.4-1-1v0c0-0.6,0.4-1,1-1h8c0.5,0,1,0.4,1,1v0C17,14.6,16.6,15,16,15z"></path>
										<path d="M16,11H8c-0.5,0-1-0.4-1-1v0c0-0.6,0.4-1,1-1h8c0.5,0,1,0.4,1,1v0C17,10.6,16.6,11,16,11z"></path>
										<path d="M16,7H8C7.4,7,7,6.6,7,6v0c0-0.5,0.4-1,1-1h8c0.5,0,1,0.4,1,1v0C17,6.6,16.6,7,16,7z"></path>
										<path d="M16,19H8c-0.5,0-1-0.4-1-1v0c0-0.5,0.4-1,1-1h8c0.5,0,1,0.4,1,1v0C17,18.6,16.6,19,16,19z"></path>
									</g>
								</svg>
							</div>
						<h2>Overview</h2>
					</div>
					<div className="bigValueHolder">
						<span className="bigValueItem"> Number of Acquisitions</span>
						<span className="bigValueItem">Total Funding Amount</span>
					</div>  
					<div className="layout-column">
						<div className="logo">data logo will go here{}</div>
					</div>
			</div>
		);
		
	}
}

ReactDOM.render(<App />, document.getElementById("app"))

