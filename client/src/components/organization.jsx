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
								<span className="bigValueItem"><span>Number of Acquisitions</span><span className="bigValueAmount"> {this.props.orgs[0].num_acquisitions}</span></span>
								<div className="spacer"></div>
								<span className="bigValueItem"><span>Total Funding Amount</span><span className="bigValueAmount">${this.props.orgs[0].num_investments}m</span></span>
					</div>
					<div className="layout-column">
						<div className="logo-wrapper">{}
							<img className="logo" src="https://crunchbase-production-res.cloudinary.com/image/upload/c_lpad,h_120,w_120,f_auto,b_white,q_auto:eco/v1442607551/tudgbjfddt21ymgfhnz0.png"></img>
						</div>
						<div className="leftAlignContent">
							<div className="name">{this.props.orgs[0].name}</div>
							<div className="shortDescription">{this.props.orgs[0].description_short}.</div>
							<div className="location">{this.props.orgs[0].location.join(', ')}</div>
							<div className="label">Categories
								<div className="categories data">{this.props.orgs[0].categories.join(', ')}</div>
							</div>
							<div className="label">Founded Date
								<div className="foundedDate data">{this.props.orgs[0].founded_date.slice(0, 4)}</div>
							</div>
							<div className="label">Founders
								<div className="founders data">{this.props.orgs[0].founders.join(', ')}</div>	
							</div>
							<div className="label">Operating Status
								<div className="opStatus">{this.props.orgs[0].operating_status.charAt(0).toUpperCase() + this.props.orgs[0].operating_status.slice(1)}</div>
							</div>
							<div className="label">Last Funding Type
								<div className="fundType data">{this.props.orgs[0].last_funding_type.charAt(0).toUpperCase() + this.props.orgs[0].last_funding_type.slice(1)}</div>
								</div>
							<div className="label">Number of Employees
								<div className="numEmployees data">{this.props.orgs[0].num_employees}</div>
							</div>
						</div>
						<div className="socialMediaBlock">
							<div className="label">Website
								<div className="Website data">{this.props.orgs[0].web_url}</div>
							</div>
							<div className="label">Facebook
								<div className="Facebook data">{this.props.orgs[0].facebook_url}</div>
							</div>
							<div className="label">LinkedIn
								<div className="LinkedIn data">{this.props.orgs[0].linkedIn_url}</div>
							</div>
							<div className="label">Twitter
								<div className="Twitter data">{this.props.orgs[0].twitter_url}</div>
							</div>
							<div className="label">Phone Number
								<div className="phoneNumber">{this.props.orgs[0].phone}</div>
							</div>
								<div className="longDescription">{this.props.orgs[0].description_long}</div>
						</div>
					</div>
				</div>
			)
	}
}

export default Organization;