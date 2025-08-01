import { HEADER_LOGO } from "../../Utills/constants";

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