import { useSuppliesQuery } from "../../redux/features/supply/supplyManagement.api";
import { TSupply } from "../../types";
import CampainCard from "./CampainCard";
import { useEffect } from "react";

const Campains = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { data } = useSuppliesQuery("");

  return (
    <div className="bg-gray-100  px-6 md:px-12 pt-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-4 gap-5">
        {data?.map((supply: TSupply) => (
          <CampainCard campain={supply} key={supply._id}></CampainCard>
        ))}
      </div>
    </div>
  );
};

export default Campains;
