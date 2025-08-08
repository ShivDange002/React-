import { useState } from "react";

const User = (props) => {
      const { name } = props;
      const [count] = useState(0);
      const [count2] = useState(1);
    return(

      
        <div>
            <h1>Function based component</h1>
            <div className="user-class">
                <h1> Name :{name}</h1>
                <h2>City: Pune</h2>
                <h3>Country: India</h3>
                <h4>Count: {count}</h4>
                <h4>Count2: {count2}</h4>
            </div>
        </div>
    )
 }

 export default User;