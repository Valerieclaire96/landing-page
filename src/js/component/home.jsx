import React from "react";
import Card from "./Card.jsx";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Footer from "./Footer.jsx";

//include images into your bundle
//create your first component
const Home = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="container">
        <div>
          <Jumbotron />
        </div>
        <div className="cards">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};
export default Home;
