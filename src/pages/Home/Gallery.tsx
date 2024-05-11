import g1 from "../../assets/images/g1.webp";
import g2 from "../../assets/images/g2.webp";
import g3 from "../../assets/images/g3.webp";
import g4 from "../../assets/images/g4.avif";
import g5 from "../../assets/images/g5.avif";
import g6 from "../../assets/images/g6.webp";
import g7 from "../../assets/images/g7.webp";
import g8 from "../../assets/images/g8.webp";
import g9 from "../../assets/images/g9.avif";
import g10 from "../../assets/images/g10.avif";
import Marquee from "react-fast-marquee";

const Gallery = () => {
  return (
    <div className="mx-6 md:mx-12 pt-12 ">
      <h1 className="text-center py-4 text-3xl font-bold">
        Explore Our Gallery
      </h1>
      <Marquee pauseOnHover className="mb-6">
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
      </Marquee>
      <Marquee direction="right" pauseOnHover>
        <div className="flex md:gap-6 gap-1">
          <img className="rounded-md h-24 md:h-48 w-full" src={g5} alt="" />
          <img className="rounded-md h-24 md:h-48 w-full" src={g6} alt="" />
          <img className="rounded-md h-24 md:h-48 w-full" src={g7} alt="" />
          <img className="rounded-md h-24 md:h-48 w-full" src={g8} alt="" />
          <img
            className="rounded-md h-24 md:h-48 w-full mr-6"
            src={g10}
            alt=""
          />
        </div>
      </Marquee>
    </div>
  );
};

export default Gallery;
