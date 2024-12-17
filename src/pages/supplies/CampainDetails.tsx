import { useLocation } from "react-router-dom";
import Details from "./Details";
import { useEffect } from "react";
import { useSingleCampainQuery } from "../../redux/features/supply/supplyManagement.api";
import spinner from "../../assets/loading.json";
import Lottie from "lottie-react";

const CampainDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const location = useLocation();
  const { supply } = location.state;
  const { data: singleCampain, isLoading } = useSingleCampainQuery(supply._id);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
        <Lottie
          style={{ height: "200px", width: "300px" }}
          animationData={spinner}
          loop={true}
        />
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="mx-4 md:mx-12">
        <div>
          {singleCampain && <Details campain={singleCampain["0"]}></Details>}
        </div>
      </div>
    </div>
  );
};

export default CampainDetails;
