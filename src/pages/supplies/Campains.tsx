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
    <div className="bg-gray-100">
      <div className="flex flex-col mb-6 items-center justify-center bg-gradient-to-r from-[#211e3d] to-[#561c3e] h-60">
        <h1 className="text-gray-100 pb-2">We Need Your Contribution</h1>
        <p className="text-white text-4xl font-bold">Our Ongoing Campains</p>
      </div>
      <div className=" px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-4 gap-10">
        {data?.map((supply: TSupply) => (
          <CampainCard campain={supply} key={supply._id}></CampainCard>
        ))}
      </div>
    </div>
  );
};

export default Campains;
