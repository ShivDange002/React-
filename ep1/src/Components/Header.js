import { HEADER_LOGO } from "../../Utills/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Title = () => (
  <><h1 id="title" key="h2">
        Food Villa
    </h1><a href="/">
            <img
                className="logo"
                alt="logo"
                src= {HEADER_LOGO}/>
        </a></>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState("Login");
  //  useEffect (
  //   () => {
  //     console.log("useEffect called");
  //   }, [isLoggedIn]
  // );
  return (
    <div>
      <div className="header">
        <Title />

        <div className="nav-items">
          <ul className="nav-list">
            <Link to={"/"}>Home</Link>
            <Link to={"/about"} >About</Link>
            <Link to={"/contact"} >Contact</Link>
            <Link to={"/cart"} >Cart</Link>
            <Link to={"/grocery"} >Grocery</Link>
          </ul>
          <ul>
            {/* <li>Login</li> */}
            <button onClick={() => {
              isLoggedIn === "Login" ?
                setIsLoggedIn("Logout") :     
              setIsLoggedIn("Login");
            } }>{isLoggedIn}</button>
          </ul>
        </div>
      </div>
    </div>
  );
};

// const HeaderComponent = () => {
//     return (
//       <Header />   
//     );
// }

export default Header;