import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CompanyLogos from "./components/CompanyLogos";
import Traditionals from "./components/Traditionals";
import ProjectsVision from "./components/ProjectsVision";
import InvestorVision from "./components/InvestorVision";
import SideImage from "./components/SideImage";
import Footer from "./components/Footer";

const imageFilenames = [
  "image 26.png",
  "image 27.png",
  "image 28.png",
  "image 29.png",
  "image 30.png",
];
const imageFilenames2 = [
  "image 21.png",
  "image 22.png",
  "image 23.png",
  "image 24.png",
  "image 25.png",
];
function App() {
  return (
    <>
      <div className="container">
        <Navbar></Navbar>
        <Hero></Hero>
        <CompanyLogos
          Company_title="In the pipeline"
          imageFilenames={imageFilenames}
        ></CompanyLogos>
        <Traditionals></Traditionals>
        <ProjectsVision></ProjectsVision>
        <InvestorVision></InvestorVision>
        <SideImage></SideImage>
        <CompanyLogos
          Company_title="In the pipeline"
          imageFilenames={imageFilenames2}
        ></CompanyLogos>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
