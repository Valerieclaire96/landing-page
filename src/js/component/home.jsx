import React from "react";
import Card from "./Card";
import Navbar from "./Navbar"
import Jumbotron from "./Jumbotron"

//include images into your bundle
//create your first component
const Home = () => {
	return (
		<div className="container">
		 	<div>
				<Navbar/>
			</div> 
			`<div>
				<Jumbotron/>
			</div>

			<div>
				<Card/>
				<Card/>
				<Card/>
			</div> 
			<div>
				<Footer/>
			</div>
		</div>
	)
}
export default home;
