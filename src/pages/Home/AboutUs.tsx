import aboutPic from "../../assets/images/aboutUs.avif";
import { CheckCircleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import Button from "../../components/ui/Button";

const AboutUs = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mx-6 md:mx-12 pt-8">
        <div>
          <p className="text-xl font-bold underline text-red-400 italic">
            About Us
          </p>
          <h1 className="text-3xl font-bold py-2">
            Empowering Communities, One Meal at a Time
          </h1>
          <p className="font-medium">
            At FloodCare, our mission is clear to alleviate the suffering caused
            by floods through efficient relief distribution and supplies
            management. We believe that in times of crisis, access to nutritious
            food and essential supplies is essential for the well-being and
            resilience of affected communities.
          </p>
          <div className="py-1 mt-6">
            <div className="flex items-center">
              <CheckCircleOutlined className="text-red-400 text-xl pr-1" />
              Charity For Medical Health
            </div>
          </div>
          <div className="py-1">
            <div className="flex items-center">
              <CheckCircleOutlined className="text-red-400 text-xl pr-1" />
              Charity For Better Hygine
            </div>
          </div>
          <div className="py-1">
            <div className="flex items-center">
              <CheckCircleOutlined className="text-red-400 text-xl pr-1" />
              Charity For Baby's Hunger
            </div>
          </div>

          <Link className="" to={"/about-us"}>
            <Button bgColor="bg-green-400 mt-3">Learn More</Button>
          </Link>
        </div>
        <div className="relative">
          <img className="rounded-lg w-full" src={aboutPic} alt="" />
          <h1 className="absolute bottom-4 -left-48  bg-red-600 p-8 hidden md:block rounded-md md:w-3/5 italic text-white text-2xl">
            20 Years of experience in <br />
            charity fund
          </h1>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
