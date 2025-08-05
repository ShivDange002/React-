import { HEADER_LOGO } from "../../Utills/constants";
import { useState, useEffect } from "react";

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
   useEffect (
    () => {
      console.log("useEffect called");
    }, [isLoggedIn]
  );
  return (
    <div>
      <div className="header">
        <Title />

        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
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

const HeaderComponent = () => {
    return (
      <Header />   
    );
}

export default Header;