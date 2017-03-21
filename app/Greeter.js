// module.exports = function() {
//   var greet = document.createElement('div');
//   greet.textContent = "Hi there and greetings!";
//   return greet;
// };


//Greeter,js
import React, {Component} from 'react';
import config from './config.json';
import styles from './Greeter.css';

class Greeter extends Component{
	constructor (props) {
		super(props);
		this.state = {date: new Date()};		
	}

	render() {
		return (
		  <div className={styles.root}>
		    <span>{config.greetText}</span>
		  </div>
		);
	}

	componentDidMount () {
		setInterval(()=>{
		  	$.ajax({
				url:"find?name=node",
				// data:{name : "node"},
				type:"get",
				success :  (msg) => {
					console.log(msg);
					msg = JSON.parse(msg);
					config.greetText = msg.desc;
					this.setState({date: new Date()});
				}
				// (msg) => {
				// 	msg = JSON.parse(msg);
				// 	config.greetText = msg.desc;
				// 	this.setState({date: new Date()});
				// }  		
		  	})
		}, 3000);
	}

	componentWillUnmount () {

	}

}

export default Greeter