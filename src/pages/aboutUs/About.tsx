import { useEffect } from "react";
import aboutUs from "../../assets/images/about.jpg";
import Motto from "./Motto";
import OurVolunteers from "./OurVolunteers";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div
        className="h-[420px] bg-cover bg-center text-white p-5"
        style={{ backgroundImage: `url(${aboutUs})` }}
      ></div>
      <div className="mx-6 md:mx-12 md:flex gap-3 py-6">
        <div className="w-full">
          <h3 className="text-green-400 font-medium ">WHERE IT ALL BEGAN</h3>
          <h1 className="text-4xl font-bold py-4">How are we?</h1>
          <p className="font-light">
            Our organization was founded with the vision of creating a better
            future for all. Over the years, we have grown and evolved, but our
            core values remain the same. We are dedicated to making a positive
            impact in the world through our various initiatives and projects.
            From supporting local communities to advocating for global change,
            our team is committed to making a difference.
          </p>
        </div>
        <div className="w-full">
          <div className="w-full">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/q3ovZ-RWLoQ?si=oK7kI--TW8NYoOAG"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      <Motto></Motto>
      <OurVolunteers></OurVolunteers>
    </div>
  );
};

export default About;
