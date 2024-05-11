import { Button } from "antd";
import bannerPic from "../../assets/images/g4.avif";
import bannerPic2 from "../../assets/images/g11.avif";

const Banner = () => {
  return (
    <div
      className="bg-cover bg-center "
      style={{ backgroundImage: `url(${bannerPic})`, height: "550px" }}
    >
      <div className="px-6 md:px-12 md:grid grid-cols-2 gap-6 items-center bg-opacity-50 bg-black h-full">
        <div className="flex justify-center flex-col items-center  ">
          <div className="">
            <h1 className="italic mb-2 text-xl md:text-6xl font-semibold text-left text-white">
              Building a Hunger <br /> Free Future
            </h1>
            <p className=" md:text-2xl  text-white">
              Empowering Communities Through Efficient Relief Distribution. Our
              platform is dedicated to revolutionizing the way food reaches
              those in need.
            </p>
            <Button className="bg-yellow-400 my-4">Explore More</Button>
          </div>
        </div>
        <div>
          <img
            className="w-full h-[300px] md:h-[400px] rounded-lg"
            src={bannerPic2}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
