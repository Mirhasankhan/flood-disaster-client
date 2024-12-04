import { useLocation } from "react-router-dom";
import Details from "./Details";
import { useEffect } from "react";
import { useSingleCampainQuery } from "../../redux/features/supply/supplyManagement.api";

const CampainDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const location = useLocation();
  const { supply } = location.state;
  const { data: singleCampain, isLoading } = useSingleCampainQuery(supply._id);

  if (isLoading) {
    return (
      <p className="text-center text-red-500 text-xl pt-24">Loading......</p>
    );
  }

  return (
    <div className="bg-gray-100 py-12">
      <div className="mx-6 md:mx-12">
        <div>
          {singleCampain && <Details campain={singleCampain["0"]}></Details>}
        </div>
      </div>
    </div>
  );
};

export default CampainDetails;
