import AboutUs from "./AboutUs";
import Banner from "./Banner";
import DonorTestimonials from "./DonorTestimonials";
import Gallery from "./Gallery";
import SimpleSlider from "./Slide";
// import Supply from "./Supply";
import Volunteer from "./Volunteer";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      {/* <Supply></Supply> */}
      <SimpleSlider></SimpleSlider>
      <AboutUs></AboutUs>
      <Gallery></Gallery>
      <DonorTestimonials></DonorTestimonials>
      <Volunteer></Volunteer>
    </div>
  );
};

export default Home;
