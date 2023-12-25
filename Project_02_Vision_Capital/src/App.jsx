import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CompanyLogos from "./components/CompanyLogos";

function App() {
  const imageFilenames = ['image 26.png', 'image 27.png', 'image 28.png', 'image 29.png', 'image 30.png'];
  return (
    <>
      <div className="container">
        <Navbar></Navbar>
        <Hero></Hero>
        <CompanyLogos Company_title="In the pipeline" imageFilenames={imageFilenames}></CompanyLogos>
      </div>
    </>
  );
}

export default App;
