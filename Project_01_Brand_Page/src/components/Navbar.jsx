import LogoImage from "../assets/images/brand_logo.png";

const Navbar = () => {
  return (
    <nav className="container">
      <img src={LogoImage} alt="" />
      <ul>
        <li>Menu</li>
        <li>location</li>
        <li>about</li>
        <li>contact</li>
      </ul>
      <button>login</button>
    </nav>
  );
};

export default Navbar;
