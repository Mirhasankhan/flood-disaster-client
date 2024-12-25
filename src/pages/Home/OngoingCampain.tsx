import { useSuppliesQuery } from "../../redux/features/supply/supplyManagement.api";
import Card from "./Card";
import { TSupply } from "../../types";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const OngoingCampain = () => {
  const { data } = useSuppliesQuery("");
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["0 1", "0.5 1"],
  });

  const opacityValue = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const yValue = useTransform(scrollYProgress, [0, 1], [200, 0]);

  return (
    <div className="pt-12 px-4 md:px-12">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h1 className="bg-blue-600 h-6 w-6"></h1>
          <h1 className="text-orange-600 text-xl font-semibold py-3">
            A Plan for the People
          </h1>
          <h1 className="text-2xl md:text-5xl font-bold">
            It’s time to take <br />
            control of <span className="text-blue-600"> our life</span>
          </h1>
        </div>
        <div>
          <h1 className="text-2xl font-bold">
            We are fighting for a better, fairer, and brighter future for every
            citizen. It’s time to do things the right way.
          </h1>
          <Link to="/campains">
            <button className="flex items-center gap-2 pt-3 md:text-xl font-medium text-blue-600">
              Explore Ongoing Campains <FaArrowRightLong />
            </button>
          </Link>
        </div>
      </div>
      <motion.div
        ref={containerRef}
        style={{ y: yValue, opacity: opacityValue, transition: "2s" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {data?.slice(3, 6).map((supply: TSupply) => (
          <Card campain={supply} key={supply._id}></Card>
        ))}
      </motion.div>
    </div>
  );
};

export default OngoingCampain;
