import React from "react";
import Navbar from "./Navbar";
import "./AboutUs.css";
import diskimg from "./Disk.jpg";
function AboutUs(){
    return(
        <div>
            <Navbar></Navbar>
            <div className="body">
            <h1 className="gap">SUMMARY</h1>
    <p>As a motivated computer science 
        graduate from Lovely Professional 
        University. Hard Working programmer 
        with hands-on experience in 
        developing, testing, and maintaining 
        software applications. Looking to use 
        the knowledge through your esteemed 
        organization</p>

    <h1 className="gap">TRAINING </h1>   
    <ul>
        <li>Completed a summer training course of on GeekforGeeks (Data structure and 
            algorithms).
            </li>
        <li>Learnt to make things easier for companies by the use of the platform, 
            GeekforGeeks, solve their problems, and store and manage data</li>    
        
    </ul>
    <h1 className="gap">PROJECTS</h1>
    <p> Disk Scheduling Algorithm Simulator</p>
    <ul>
        <li>Technology Used: HTML, CSS, JavaScript, DSA</li>
        <li>This project is used to calculate and demonstrate the solution 
            of problems related to Disk Scheduling.</li>
    </ul>
    <img src= {diskimg} className="Disk"></img>
            </div>
        </div>
    );
}
export default AboutUs;