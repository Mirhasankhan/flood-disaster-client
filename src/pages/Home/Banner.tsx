import bannerPic2 from "../../assets/images/bannerImg.png";
import { easeInOut, motion } from "framer-motion";
import gridImage from "../../assets/images/grid.svg";
import { Link } from "react-router-dom";

const parent = {
  hidden: {
    scale: 0.5,
    opacity: 0,
    x: 600,
  },
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.5,
      delay: 0.5,
      ease: easeInOut,
    },
  },
};

const parentLeft = {
  hidden: {
    y: 500,
    scale: 0.5,
  },
  visible: {
    y: 0,
    scale: 1,
    transition: {
      duration: 1.5,
      delay: 0.5,
    },
  },
};

const Banner = () => {
  return (
    <div
      className="bg-contain overflow-hidden"
      style={{ backgroundImage: `url(${gridImage})`, height: "580px" }}
    >
      <div className="px-6 md:px-12 md:grid grid-cols-2 gap-6 items-center bg-opacity-5 bg-black h-full">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={parentLeft}
          className="flex justify-center flex-col items-center  "
        >
          <div className="">
            <p className="text-orange-600 font-medium text-2xl pb-2">
              This is our dream
            </p>
            <h1 className="italic mb-2 text-xl md:text-6xl font-semibold text-left ">
              Building a Hunger <br /> Free
              <span className="text-blue-700">Future</span>
            </h1>
            <p className=" md:text-xl  text-gray-700">
              Empowering Communities Through Efficient Relief Distribution. Our
              platform is dedicated to revolutionizing the way donation reaches
              those in need.
            </p>
            <div className="flex">
              <Link to="/campains">
                <button className="main-button">Donate</button>
              </Link>
              <Link to="/about-us">
                <button className="!bg-gray-600 main-button">Learn More</button>
              </Link>
            </div>
          </div>
        </motion.div>
        <motion.div initial="hidden" animate="visible" variants={parent}>
          <img
            className="w-full h-[300px] md:h-[580px] rounded-lg"
            src={bannerPic2}
            alt=""
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
