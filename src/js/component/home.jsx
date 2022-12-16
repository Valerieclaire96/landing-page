import React from "react";
import Card from "./Card.jsx";
import Navbar from "./Navbar.jsx"
import Jumbotron from "./Jumbotron.jsx"
import Footer from "./Footer.jsx"

//include images into your bundle
//create your first component
const Home = () => {
	return (
		<div className="container">
		 	<div>
				<Navbar/>
			</div> 
			<div>
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
	);
}
export default Home;
