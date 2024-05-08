import { Select } from "antd";
import { categories } from "../../constants/global";
import { useSuppliesQuery } from "../../redux/features/supply/supplyManagement.api";
import { TSupply } from "../../types";
import SupplyCard from "./SupplyCard";
import { useEffect, useState } from "react";

const Supplies = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { data } = useSuppliesQuery("");
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelectChange = (value: string) => {
    setSelectedOption(value);
  };

  const filteredSupplies =
    selectedOption && selectedOption !== "All"
      ? data?.filter(
          (supply: { category: string }) => supply.category === selectedOption
        )
      : data;

  return (
    <div className="mx-12">
      <div>
        <div className="w-full my-12">
          <h1 className="text-center font-semibold text-5xl">
            Our All Supplies
          </h1>
          <label className="text-xl font-medium">*Filter By Category: </label>
          <Select
            defaultValue="filter"
            className="w-1/5"
            onChange={handleSelectChange}
            options={categories}
          ></Select>
        </div>
      </div>
      <div className="grid grid-cols-4  gap-5">
        {filteredSupplies?.map((supply: TSupply) => (
          <SupplyCard supply={supply} key={supply._id}></SupplyCard>
        ))}
      </div>
    </div>
  );
};

export default Supplies;
