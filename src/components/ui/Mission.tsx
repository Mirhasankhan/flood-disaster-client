import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";

const Mission = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["0 1", "0.2 1"],
  });

  const xLeftValue = useTransform(scrollYProgress, [0, 1], [-500, 0]);
  const xRightValue = useTransform(scrollYProgress, [0, 1], [500, 0]);
  const opacityValue = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scaleValue = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <div>
      <motion.div className="flex flex-col md:flex-row md:justify-between">
        <motion.div
          ref={containerRef}
          style={{
            scale: scaleValue,
            x: xLeftValue,
            opacity: opacityValue,
            transition: "2s",
          }}
          className="md:w-[50%]"
        >
          <div className="w-[20px] h-[20px] bg-blue-700"></div>
          <h1 className="text-[#cf1a45] font-bold text-xl mt-2">
            A plan for the people
          </h1>
          <h1 className="text-[40px] font-bold ">It’s time to take</h1>
          <h1 className="text-[40px] font-bold -translate-y-2">
            control of <span className="text-blue-600">our life</span>
          </h1>
        </motion.div>
        <motion.div
          ref={containerRef}
          style={{
            scale: scaleValue,
            x: xRightValue,
            opacity: opacityValue,
            transition: "2s",
          }}
          className="md:w-[50%]"
        >
          <h1 className=" text-xl font-bold mt-10  text-gray-600">
            We are fighting for a better, fairer, and brighter future for every
            citizen. It’s time to do things the right way.
          </h1>
          <Link to="/campains" className="group">
            <button className=" text-blue-600 gap-1 group-hover:text-blue-900 text-md font-semibold mt-4 rounded-lg inline-flex items-center">
              Explore Ongoing Campains?
              <FaArrowRightLong />
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Mission;
