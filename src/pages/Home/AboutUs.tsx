import { Button } from "antd";
import aboutPic from "../../assets/images/aboutUs.avif";

const AboutUs = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-6 md:mx-12 pt-8">
      <div>
        <p className="text-xl">About Us</p>
        <h1 className="text-3xl font-bold py-2">
          Empowering Communities, One Meal at a Time
        </h1>
        <p>
          At flood donation, our mission is clear: to alleviate the suffering
          caused by floods through efficient food distribution and supplies
          management. We believe that in times of crisis, access to nutritious
          food and essential supplies is essential for the well-being and
          resilience of affected communities.
        </p>
        <Button className="mt-5">Donate Now</Button>
      </div>
      <div>
        <img className="rounded-lg" src={aboutPic} alt="" />
      </div>
    </div>
  );
};

export default AboutUs;
