import ApplySupply from "./ApplySupply";
import { TSupplyCardProps } from "../../types";
import { Link } from "react-router-dom";
import { Button } from "antd";

const SupplyCard = ({ supply }: TSupplyCardProps) => {
  const { supplyName, amount, image, category, _id } = supply;

  return (
    <div className="shadow-md border overflow-hidden rounded-md">
      <img
        className="w-full h-60 hover:scale-110 transition-transform duration-300"
        src={image.imageUrl}
        alt=""
      />
      <h1 className="pl-3 pt-3 font-bold">{supplyName}</h1>
      <div className="flex justify-between p-3">
        <p className="text-red-400">${amount}</p>
        <p>Category: {category}</p>
      </div>
      <div className="p-3 flex gap-2 justify-between">
        <Link to={`/supplies/${_id}`} state={{ supply: supply }}>
          <Button className="bg-green-400 h-10">View Details</Button>
        </Link>
        <ApplySupply supply={supply}></ApplySupply>
      </div>
    </div>
  );
};

export default SupplyCard;
