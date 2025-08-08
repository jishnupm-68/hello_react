import  User from "./User"
import { Component } from "react";
import UserClass from "./UserClass";

class About extends Component{
    constructor(props){
        super(props);
    }
    render(){
       return(
        <div className="bg-gray-300 p-5 m-5">
            <div className="about">
            <h1 className="font-bold">About Us</h1>
            <User name={"Jishnu pm function "} />
            <UserClass  name={"Jishnu pm class"}/>
            <p>We are a leading food delivery service, committed to bringing delicious meals to your doorstep.</p>
            <p>Our mission is to connect people with their favorite restaurants and provide a seamless dining
experience.</p>
        </div>
        </div>
    )
    }
}


export default About;