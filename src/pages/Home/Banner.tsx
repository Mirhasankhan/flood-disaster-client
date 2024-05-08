import { Button } from "antd";
import bannerPic from "../../assets/images/banner.webp";

const Banner = () => {
  const divStyle = {
    backgroundImage: `url(${bannerPic})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "500px", // Adjust height as needed
  };

  return (
    <div>
      <div
        style={divStyle}
        className="flex justify-center flex-col items-center px-12"
      >
        <h1 className="text-5xl font-semibold text-center text-gray-700">
          Building a Hunger-Free Future: Transforming Food Distribution for Good
        </h1>
        <p className="text-2xl">
          Empowering Communities Through Efficient Food Distribution: Our
          platform is dedicated to revolutionizing the way food reaches those in
          need. Join us in our mission to ensure no one goes hungry. Together,
          we can make a difference.
        </p>
        <Button className="bg-yellow-400 my-4">Explore More</Button>
      </div>
    </div>
  );
};

export default Banner;
