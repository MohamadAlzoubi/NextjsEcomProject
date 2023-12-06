import Navbar from "../components/navbar";
import Banner from "../home/Banner";
import What from "../home/What";
import Work from "../home/Work";
import Statistics from "../home/Statistics";
import RoadMap from "../home/RoadMap";
import Team from "../home/Team";
import Footer from "../home/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Work />
      <What />
      <Statistics/>
      <RoadMap/>
      <Team/>
      <Footer/>
    </>
  );
}