import { Header_Link } from "../utilis/constance";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        {" "}
        <img
          className="logoimg"
          src= {Header_Link}
          alt="ghhh"
        />
        Cal.com
      </div>

      <nav className="nav-links">
        <a href="#">HOME</a>
        <a href="#">ABOUT</a>
        <a href="#">OFFERS</a>
        <a href="#">CART</a>
      </nav>

      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>
    </header>
  );
};

export default Header