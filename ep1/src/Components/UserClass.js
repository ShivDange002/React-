
import React from "react";
class UserClass extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
           
            <div className="user-class">
 <h1> Class Based Component </h1>
  <h2>Name : {this.props.name}</h2>
  <h2>City: {this.props.city}</h2>
    <h2>Country: {this.props.country}</h2>
            </div>

        )
    }
}

export default UserClass;