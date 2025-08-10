import { HEADER_LOGO } from "../../Utills/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Title = () => (
  <div className="flex items-center space-x-2">
    <h1 id="title" key="h2" className="text-2xl font-bold text-gray-800">
      Food Villa
    </h1>
    <a href="/">
      <img
        className="w-12 h-12 rounded-full border-2 border-gray-300"
        alt="logo"
        src={HEADER_LOGO}
      />
    </a>
  </div>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState("Login");

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Logo & Title */}
        <Title />

        {/* Navigation */}
        <nav className="flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-blue-500 font-medium">
            Home
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-500 font-medium">
            About
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-500 font-medium">
            Contact
          </Link>
          <Link to="/cart" className="text-gray-700 hover:text-blue-500 font-medium">
            Cart
          </Link>
          <Link to="/grocery" className="text-gray-700 hover:text-blue-500 font-medium">
            Grocery
          </Link>
        </nav>

        {/* Login / Logout Button */}
        <button
          onClick={() =>
            setIsLoggedIn(isLoggedIn === "Login" ? "Logout" : "Login")
          }
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition duration-200"
        >
          {isLoggedIn}
        </button>
      </div>
    </header>
  );
};

export default Header;
