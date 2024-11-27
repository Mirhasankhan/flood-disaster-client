// import g1 from "../../assets/images/g1.webp";
// import g2 from "../../assets/images/g2.webp";
// import g3 from "../../assets/images/g3.webp";
// import g4 from "../../assets/images/g4.avif";
import g5 from "../../assets/images/g5.avif";
import g6 from "../../assets/images/g6.webp";
import g7 from "../../assets/images/g7.webp";
import g8 from "../../assets/images/g8.webp";
// import g9 from "../../assets/images/g9.avif";
import g10 from "../../assets/images/g10.avif";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const Gallery = () => {
  return (
    <div className="pt-12 ">
      <div className="mx-6 md:mx-12  grid grid-cols-2 py-12">
        <div>
          <h1 className="bg-blue-600 h-6 w-6"></h1>
          <h1 className="text-orange-600 text-xl font-semibold py-3">
            Get involved
          </h1>
          <h1 className="text-5xl font-bold">
            Take Part in
            <br />
            <span className="text-blue-600">Something Valuable</span>
          </h1>
        </div>
        <div>
          <h1 className="text-2xl font-bold">
            Unity is strength! When there is teamwork and collaboration,
            wonderful things can be achieved. Efficiency is doing better that
            what is already being done.
          </h1>
          <Link to="/campains">
            <button className="flex items-center gap-2 pt-3 text-xl font-medium text-blue-600">
              Explore Ongoing Campains <FaArrowRightLong />
            </button>
          </Link>
        </div>
      </div>
      {/* <Marquee pauseOnHover className="mb-6">
        <div className="flex md:gap-6 gap-1">
          <img className="rounded-md h-24 md:h-48 w-full" src={g1} alt="" />
          <img className="rounded-md h-24 md:h-48 w-full" src={g2} alt="" />
          <img className="rounded-md h-24 md:h-48 w-full" src={g3} alt="" />
          <img className="rounded-md h-24 md:h-48 w-full" src={g4} alt="" />
          <img
            className="rounded-md h-24 md:h-48 w-full mr-6"
            src={g9}
            alt=""
          />
        </div>
      </Marquee> */}
      <Marquee direction="right" pauseOnHover>
        <div className="flex md:gap-6 gap-1">
          <img className="rounded-md h-24 md:h-80 w-full" src={g5} alt="" />
          <img className="rounded-md h-24 md:h-80 w-full" src={g6} alt="" />
          <img className="rounded-md h-24 md:h-80 w-full" src={g7} alt="" />
          <img className="rounded-md h-24 md:h-80 w-full" src={g8} alt="" />
          <img
            className="rounded-md h-24 md:h-80  w-full mr-6"
            src={g10}
            alt=""
          />
        </div>
      </Marquee>
    </div>
  );
};

export default Gallery;
