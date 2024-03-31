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
      <div style={divStyle} className="flex justify-center items-center">
        <h1 className="text-8xl font-semibold text-white text-center">
          WORKING AS ONE FOR <br></br> THE GOOD OF MANY
        </h1>
      </div>
    </div>
  );
};

export default Banner;
