import AboutUs from "./AboutUs";
import Banner from "./Banner";
import DonorTestimonials from "./DonorTestimonials";
import OngoingCampain from "./OngoingCampain";
import Volunteers from "./volunteer/Volunteer";
// import Volunteer from "./Volunteer";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <OngoingCampain></OngoingCampain>
      <AboutUs></AboutUs>
      <Volunteers></Volunteers>
      <DonorTestimonials></DonorTestimonials>
      {/* <Gallery></Gallery> */}
    </div>
  );
};

export default Home;
