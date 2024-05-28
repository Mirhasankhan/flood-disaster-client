import { useLocation } from "react-router-dom";
import Details from "./Details";
import { useSuppliesQuery } from "../../redux/features/supply/supplyManagement.api";
import Related from "./Related";
import { TSupply } from "../../types";
import { useEffect } from "react";

const SupplyDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { data } = useSuppliesQuery("");
  const location = useLocation();
  const { supply } = location.state;

  const unApproved = data.filter(
    (a: { isApproved: boolean }) => a.isApproved == false
  );
  return (
    <div className="bg-gray-300 py-12">
      <div className="mx-6 md:mx-12 bg-white rounded-md p-2">
        <div className="md:grid grid-cols-5">
          <div className="col-span-4  p-2">
            <Details supply={supply}></Details>
          </div>
          <div className="col-span-1 mt-3 md:mt-0 bg-gray-300 p-3 max-h-96 overflow-y-auto">
            <h1 className="text-center my-4 font-semibold underline text-white">
              Related Supplies
            </h1>
            {unApproved.map((r: TSupply) => (
              <Related key={r._id} related={r}></Related>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupplyDetails;
