import Shoes_image from "../assets/images/shoe_image.png";
import Daraz from "../assets/images/Daraz_Logo.png";
const HeroSection = () => {
  return (
    <>
    <div className="hero container">
      <div className="herotitle">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
        <div className="hero_btn">
            <button>Shop Now</button>
            <button className="secondary-btn">Category</button>
        </div>
        <div className="shopnow">
        <p>Also Available On</p>
        <div className="shopicon">
          <img src={Daraz} alt="" />
        </div>
      </div>
      </div>
      <div className="heroimage">
        <img src={Shoes_image} alt="Shoes Image" />
      </div>
      
      </div>
    </>
  );
};

export default HeroSection;
