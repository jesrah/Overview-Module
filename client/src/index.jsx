import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	constructor(props){
		super(props);
	}
	render() {
		return <h4>Hello! I'm React and I work</h4>
	}
}

ReactDOM.render(<App />, document.getElementById("app"))