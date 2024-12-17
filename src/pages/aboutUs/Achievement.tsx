import CountUp from "react-countup";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const children = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
      delay: 2.2,
    },
  },
};

const Achievement = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScrolled = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScrolled);

    return () => {
      window.removeEventListener("scroll", handleScrolled);
    };
  }, []);
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={children}
      className="flex justify-end relative"
    >
      <div className="bg-[#cf1a45] w-[100%]  h-[120px] rounded-md ">
        <div className="text-white flex px-2 pt-8 justify-between items-center z-50">
          <div className="flex flex-col">
            <span
              className="inline-flex font-bold text-xl md:text-[40px]"
              style={{ width: "100px" }}
            >
              {scrolled ? <CountUp start={0} end={285000} duration={3} /> : 0}+
            </span>
            <h1 className="md:text-xl text-md  md:ml-4">Collection</h1>
          </div>
          <div className="flex flex-col">
            <span
              className="inline-flex font-bold text-xl md:text-[40px]"
              style={{ width: "120px" }}
            >
              {scrolled ? <CountUp start={0} end={6000} duration={3} /> : 0}+
            </span>
            <h1 className="md:text-xl text-md text-center -ml-10 md:ml-0">
              Donation
            </h1>
          </div>
          <div className="flex flex-col z-50">
            <span
              className="inline-flex font-bold text-xl md:text-[40px]"
              style={{ width: "120px" }}
            >
              {scrolled ? <CountUp start={0} end={300} duration={3} /> : 0}+
            </span>
            <h1 className="md:text-xl text-md ">Volunterier</h1>
          </div>
        </div>
      </div>
      <div
        style={{
          clipPath: "polygon(55% 0, 100% 0%, 100% 100%, 0% 100%)",
        }}
        className="bg-[#b8173d] w-[200px] h-[120px] absolute top-0 rounded-md"
      ></div>
    </motion.div>
  );
};

export default Achievement;
