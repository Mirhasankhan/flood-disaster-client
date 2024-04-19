import { Select } from "antd";
import { categories } from "../../constants/global";
import { useSuppliesQuery } from "../../redux/features/supply/supplyManagement.api";
import { TSupply } from "../../types";
import SupplyCard from "./SupplyCard";
import { useState } from "react";

const Supplies = () => {
  const { data } = useSuppliesQuery("");
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelectChange = (value: string) => {
    setSelectedOption(value);
  };

  const filteredSupplies = selectedOption
    ? data?.filter(
        (supply: { category: string }) => supply.category === selectedOption
      )
    : data;

  return (
    <div>
      <div className="w-full mb-16 flex justify-end">
        <Select
          className="w-1/5"
          onChange={handleSelectChange}
          options={categories}
        ></Select>
      </div>
      <div className="grid grid-cols-4 mx-12 gap-5">
        {filteredSupplies?.map((supply: TSupply) => (
          <SupplyCard supply={supply} key={supply._id}></SupplyCard>
        ))}
      </div>
    </div>
  );
};

export default Supplies;
