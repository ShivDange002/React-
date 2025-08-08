
import React from "react";
class UserClass extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            count:0,
            count1: 1
        }
        console.log("Child component constructor called");
    }
   
componentDidMount(){
        console.log("Child component did mount called");
    }
    render() {
         const { count} = this.state;
         console.log("Child component render called");
        return (
           
            <div className="user-class">
 <h1> Class Based Component </h1>
  <h2>Name : {this.props.name}</h2>
  <h2>City: {this.props.city}</h2>
    <h2>Country: {this.props.country}</h2>
    <h4> Count : {count}</h4>
    <button
     onClick={() => {
        // count : this.state.count +1;
        this.setState({
            count : this.state.count + 1
        })
     }}
    >Set Count</button>
            </div >

        )
    }
}

export default UserClass;