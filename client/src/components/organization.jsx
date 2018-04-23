import React from 'react';
import ReactDOM from 'react-dom';

class Organization extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
					<div className="bigValueHolder">
							<span className="bigValueItem"><span>Number of Acquisitions</span><span className="bigValueAmount"> 20{}</span></span>
							<div className="spacer"></div>
							<span className="bigValueItem"><span>Total Funding Amount</span><span className="bigValueAmount">$43m{}</span></span>
				</div>
				<div className="layout-column">
					<div className="logo-wrapper">{}
						<img className="logo" src="https://crunchbase-production-res.cloudinary.com/image/upload/c_lpad,h_120,w_120,f_auto,b_white,q_auto:eco/v1442607551/tudgbjfddt21ymgfhnz0.png"></img>
					</div>
					<div className="leftAlignContent">
						<div className="name">Sutro</div>
						<div className="shortDescription">Short description placeholder: Sutro is a multinational corporation that designs, manufactures, and markets consumer electronics, personal computers, and software.</div>
						<div className="location">San Francisco, California, United States</div>
						<div className="cats label">Categories
							<div className="categories data">Hardware, Water</div>
						</div>
						<div className="label">Founded Date
							<div className="foundedDate data">2012</div>
						</div>
						<div className="label">Founders
							<div className="founders data">Amanda Nagai, Ravi Kurani</div>	
						</div>
						<div className="label">Operating Status
							<div className="opStatus">Active</div>
						</div>
						<div className="label">Last Funding Type
							<div className="fundType data">Non-equity Assistance</div>
							</div>
						<div className="label">Number of Employees
							<div className="numEmployees data">1-10</div>
						</div>
					</div>
					<div className="socialMediaBlock">
						<div className="label">Website
							<div className="Website data">www.sutro.com</div>
						</div>
						<div className="label">Facebook
							<div className="Facebook data"></div>
						</div>
						<div className="label">LinkedIn
							<div className="LinkedIn data"></div>
						</div>
						<div className="label">Twitter
							<div className="Twitter data"></div>
						</div>
						<div className="label">Phone Number
							<div className="phoneNumber">(408) 996-0101</div>
						</div>
							<div className="longDescription">Long description placeholder: Sutro is a multinational corporation that designs, manufactures, and markets consumer electronics, personal computers, and software. Sutro is a multinational corporation that designs, manufactures, and markets consumer electronics, personal computers, and software. Sutro is a multinational corporation that designs, manufactures, and markets consumer electronics, personal computers, and software.</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Organization;