import User from "./User";
import UserClass from "./UserClass";
import React from "react";

// const About  = () => {
//     return(
//         <div>
//         <h1>About Us component</h1>
//          <User name = {"Shiv"} city = {"Pune"} country = {"India"}/>
//          <UserClass name = {"Pooja"} city = {"Mumbai"} country = {"US"} />
//         </div>
//     )
// }

class About extends React.Component {
    constructor(props){
        super(props)
   console.log("Parent component consstructor called");
    }
    componentDidMount(){
        console.log("Parent component did mount called");
    }
    render() {
           console.log("Parent component render called");
        return(
            <div>
                <h1> About Us Component</h1>
                <UserClass name = {"Pooja"} city = {"Pune"} country = {"India"}/>
            </div>
        )
    }
}

export default About

