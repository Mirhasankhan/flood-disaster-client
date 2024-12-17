import { useSuppliesQuery } from "../../redux/features/supply/supplyManagement.api";
import { TSupply } from "../../types";
import Card from "../Home/Card";
import { useEffect } from "react";

const Campains = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { data } = useSuppliesQuery("");

  return (
    <div className="bg-gray-100">
      <div className="flex flex-col mb-4 text-center items-center justify-center bg-gradient-to-r from-[#211e3d] to-[#561c3e] h-60">
        <h1 className="text-gray-100 pb-2">We Need Your Contribution</h1>
        <p className="text-white text-2xl md:text-4xl font-bold">
          Our Ongoing Campains
        </p>
      </div>
      <div className="px-4 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:pb-4 gap-2">
        {data?.map((supply: TSupply) => (
          <Card campain={supply} key={supply._id}></Card>
        ))}
      </div>
    </div>
  );
};

export default Campains;
