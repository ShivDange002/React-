import User from "./User";
import UserClass from "./UserClass";

const About  = () => {
    return(
        <div>
        <h1>About Us component</h1>
         <User name = {"Shiv"} />
         <UserClass name = {"Pooja"} city = {"Mumbai"} country = {"India"} />
        </div>
    )
}

export default About

