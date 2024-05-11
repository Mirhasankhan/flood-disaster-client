import { TSupplyCardProps } from "../../types";
import SupplyDetailsModal from "../supplies/SupplyDetailsModal";

const Card = ({ supply }: TSupplyCardProps) => {
  const { supplyName, amount, image, category } = supply;

  return (
    <div className="border shadow-md rounded-md overflow-hidden">
      <img
        className="w-full h-80 hover:scale-110 transition-transform duration-300"
        src={image.imageUrl}
        alt=""
      />
      <h1 className="pl-3 pt-3 font-bold">{supplyName}</h1>
      <div className="flex justify-between p-3">
        <p className="text-red-500">${amount}</p>
        <p>Category: {category}</p>
      </div>
      <div className="p-3">
        <SupplyDetailsModal supply={supply}></SupplyDetailsModal>
      </div>
    </div>
  );
};

export default Card;
