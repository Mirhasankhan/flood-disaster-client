import aboutPic from "../../assets/images/aboutUs.avif";
import { CheckCircleOutlined } from "@ant-design/icons";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mx-6 md:mx-12 pt-8">
        <div>
          <h1 className="bg-blue-600 h-6 w-6"></h1>
          <h1 className="text-orange-600 text-xl font-semibold py-2">
            About Us
          </h1>
          <h1 className="text-3xl font-bold py-2">
            Empowering Communities, One Meal at a Time
          </h1>
          <p className="font-medium">
            AltruistHub is a non-political, non-profit organization dedicated to
            flood disaster, education, and comprehensive humanitarian service.
            It strives to serve distressed humanity, reform society, instill
            noble moral values, create employment opportunities, alleviate
            poverty, run multifaceted education projects, distribute relief,
            provide low-cost or free healthcare services, implement various
            programs to foster a clean mindset, and, above all, use verbal,
            written. Through these efforts, AltruistHub aims to build an ideal
            welfare society to the best of its ability.
          </p>
          <div className="py-1 mt-4">
            <div className="flex items-center">
              <CheckCircleOutlined className="text-red-400 text-xl pr-1" />
              Charity For Flood Effected
            </div>
          </div>
          <div className="py-1">
            <div className="flex items-center">
              <CheckCircleOutlined className="text-red-400 text-xl pr-1" />
              Charity For Education
            </div>
          </div>
          <div className="py-1">
            <div className="flex items-center">
              <CheckCircleOutlined className="text-red-400 text-xl pr-1" />
              Charity For Unemployed
            </div>
          </div>

          <button className="bg-blue-600 mt-6 text-white py-2 px-8 text-xl mr-2 rounded-md font-medium">
            Donate
          </button>
          <button className="bg-gray-600 mt-6 text-white py-2 px-4 text-xl mr-2 rounded-md font-medium">
            Learn More
          </button>
        </div>
        <div className="relative">
          <img className="rounded-lg w-full" src={aboutPic} alt="" />
          <h1 className="absolute bottom-4 -left-48  bg-red-600 p-8 hidden md:block rounded-md md:w-3/5 italic text-white text-2xl">
            20 Years of experience in <br />
            charity fund
          </h1>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutUs;
