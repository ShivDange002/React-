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
        super(props);

        this.state = {
            name: "Dummy",
            email: "Dummy email",
           
        }

   //console.log("Parent component consstructor called");
    }
   async  componentDidMount(){

    const data = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const json = await data.json();
    this.setState({
        name: json.name,
        email: json.email
    });
console.log(json);
       // console.log("Parent component did mount called");
    }
    render() {

        const { name, email} = this.state;
        //    console.log("Parent component render called");
        return(
            <div>
                <h1> About Us Component</h1>
                
                   <UserClass name = {name}  email  ={email} />
            </div>
        )
    }
}

export default About

