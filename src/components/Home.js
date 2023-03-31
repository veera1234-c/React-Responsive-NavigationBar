import React from "react";
import Navbar from "./Navbar";
import "./home.css";
import background from "./home.jpg";
function Home(){
    return(
        <div>
            <Navbar></Navbar>
            <img src={background} className="bg"></img>
        </div>
    );
}
export default Home;