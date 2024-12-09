import { useEffect } from "react";
import aboutUs from "../../assets/images/donate.webp";
import Motto from "./Motto";
import OurVolunteers from "./OurVolunteers";
import { Link } from "react-router-dom";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div
        className="h-[580px] bg-cover bg-center  grid grid-cols-2"
        style={{ backgroundImage: `url(${aboutUs})` }}
      >
        <h1></h1>
        <div className="bg-gray-200 w-3/5 my-16 mx-auto p-8">
          <h1 className="text-5xl pb-2 font-semibold">
            Individually, we are one drop. Together, we are ocean
          </h1>
          <p>
            Early on, believe that care is a right diversity is a strength, the
            economy should work for everyone, and facts and truth matter.
          </p>
          <Link to="/campains">
            <button className="border p-2 rounded-lg text-red-500 border-red-500 bg-white mt-4">
              Help Our Community
            </button>
          </Link>
        </div>
      </div>
      <div className="mx-6 md:mx-12">
        <Motto></Motto>
        <OurVolunteers></OurVolunteers>
      </div>
    </div>
  );
};

export default About;
