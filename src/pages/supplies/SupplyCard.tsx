import ApplySupply from "./ApplySupply";
import { TSupplyCardProps } from "../../types";
import SupplyDetailsModal from "./SupplyDetailsModal";

const SupplyCard = ({ supply }: TSupplyCardProps) => {
  const { supplyName, quantity, image, category } = supply;

  return (
    <div className="shadow-md border overflow-hidden rounded-md">
      <img
        className="w-full h-60 hover:scale-110 transition-transform duration-300"
        src={image.imageUrl}
        alt=""
      />
      <h1 className="pl-3 pt-3 font-bold">{supplyName}</h1>
      <div className="flex justify-between p-3">
        <p>Amount: ${quantity}</p>
        <p>Category: {category}</p>
      </div>
      <div className="p-3 flex gap-2 justify-between">
        <SupplyDetailsModal supply={supply}></SupplyDetailsModal>
        <ApplySupply supply={supply}></ApplySupply>
      </div>
    </div>
  );
};

export default SupplyCard;
