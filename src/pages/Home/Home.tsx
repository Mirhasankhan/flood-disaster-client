import AboutUs from "./AboutUs";
import Banner from "./Banner";
import DonorTestimonials from "./DonorTestimonials";
import Gallery from "./Gallery";
import Supply from "./Supply";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Supply></Supply>
      <AboutUs></AboutUs>
      <Gallery></Gallery>
      <DonorTestimonials></DonorTestimonials>
    </div>
  );
};

export default Home;
