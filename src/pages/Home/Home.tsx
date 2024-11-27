import AboutUs from "./AboutUs";
import Banner from "./Banner";
import Gallery from "./Gallery";
import OngoingCampain from "./OngoingCampain";
import Volunteers from "./volunteer/Volunteer";
// import Volunteer from "./Volunteer";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <OngoingCampain></OngoingCampain>
      <AboutUs></AboutUs>
      <Gallery></Gallery>
      {/* <DonorTestimonials></DonorTestimonials> */}
      {/* <Volunteer></Volunteer> */}
      <Volunteers></Volunteers>
    </div>
  );
};

export default Home;
