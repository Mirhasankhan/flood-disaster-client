import aboutPic from "../../assets/images/aboutUs.avif";
import { CheckCircleOutlined } from "@ant-design/icons";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { Link } from "react-router-dom";
import Achievement from "../aboutUs/Achievement";

const AboutUs = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["0 1", "0.5 1"],
  });

  const opacityValue = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const yValue = useTransform(scrollYProgress, [0, 1], [200, 0]);
  return (
    <motion.div
      ref={containerRef}
      style={{ y: yValue, opacity: opacityValue, transition: "2s" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mx-6 md:mx-12 pt-16">
        <div>
          <h1 className="bg-blue-600 h-6 w-6"></h1>
          <h1 className="text-orange-600 text-xl font-semibold pt-2">
            About Us
          </h1>
          <h1 className="text-2xl font-bold py-2">
            Transforming Lives, One Act of Kindness at a Time
          </h1>
          <p className="font-medium">
            AltruistHub is a non-political, non-profit organization dedicated to
            humanitarian service, focusing on flood disaster relief, education,
            and societal reform. It aims to aid distressed communities, promote
            moral values, alleviate poverty, create jobs, and provide affordable
            or free healthcare. AltruistHub also runs education projects,
            distributes relief, and fosters a clean mindset, all in pursuit of
            building an ideal welfare society.
          </p>
          <div className="py-1 mt-2">
            <div className="flex items-center">
              <CheckCircleOutlined className="text-blue-600 text-xl pr-1" />
              Charity For Flood Effected
            </div>
          </div>
          <div className="py-1">
            <div className="flex items-center">
              <CheckCircleOutlined className="text-blue-600 text-xl pr-1" />
              Charity For Education
            </div>
          </div>
          <div className="py-1">
            <div className="flex items-center">
              <CheckCircleOutlined className="text-blue-600 text-xl pr-1" />
              Charity For Unemployed
            </div>
          </div>

          <Link to="/campains">
            <button className="bg-blue-600 mt-6 text-white py-2 px-8 text-xl mr-2 rounded-md font-medium">
              Donate
            </button>
          </Link>
          <Link to="/about-us">
            <button className="bg-gray-600 mt-6 text-white py-2 px-4 text-xl mr-2 rounded-md font-medium">
              Learn More
            </button>
          </Link>
        </div>
        <div className="relative">
          <img
            className="rounded-full h-[380px] w-[380px] mx-auto"
            src={aboutPic}
            alt=""
          />
          {/* <h1 className="absolute animate-bounce-y bottom-4 left-20  bg-blue-600 p-8 hidden md:block rounded-full italic text-white text-2xl">
            20 Years of <br />
            experience
          </h1> */}
          <div className="hidden md:block absolute animate-bounce-y bottom-4 -left-40  w-full">
            <Achievement></Achievement>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutUs;
