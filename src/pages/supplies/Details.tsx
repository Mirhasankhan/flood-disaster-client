import { useState } from "react";
import { Button } from "antd";
import { TSupplyCardProps } from "../../types";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { PiKeyReturnLight } from "react-icons/pi";
import { FaShippingFast } from "react-icons/fa";
import { useAppSelector } from "../../redux/hooks";
import { useCurrentUser } from "../../redux/features/auth/authSlice";

const Details = ({ supply }: TSupplyCardProps) => {
  const { amount, category, image, supplyName, name } = supply;
  const { role } = useAppSelector(useCurrentUser);
  const [transform, setTransform] = useState("scale(1)");
  const [origin, setOrigin] = useState("center center");

  const handleWatchlist = () => {
    toast.success("Supply has been added to watchlist!");
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setOrigin(`${x}% ${y}%`);
    setTransform("scale(2)");
  };

  const handleMouseLeave = () => {
    setTransform("scale(1)");
    setOrigin("center center");
  };

  return (
    <div className="md:grid grid-cols-4 gap-6">
      <div className="col-span-2">
        <div
          className="h-64 md:h-[384px] rounded-md w-full overflow-hidden"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <img
            className="h-full w-full object-cover transition-transform duration-300"
            src={image.imageUrl}
            alt={supplyName}
            style={{ transform, transformOrigin: origin }}
          />
        </div>
      </div>
      <div className="col-span-2 mt-3">
        <h1>
          <span className="text-xl font-semibold">{supplyName}</span> (11
          Reviews)
        </h1>
        <h1>Donated By: {name}</h1>
        <h2 className="mt-5">
          <span className="font-semibold">Category:</span> {category}
        </h2>
        <h1 className="text-2xl text-orange-500 pt-5">Amount: ${amount}</h1>
        <div className="flex items-center gap-2 pt-5 text-gray-500">
          <FaShippingFast />
          <p className="text-sm ">Free worldwide shipping.</p>
        </div>
        <div className="flex text-gray-500 items-center gap-2">
          <PiKeyReturnLight />
          <p className="text-sm text-gray-500">
            Delivers in: 2-3 Working Days Shipping
          </p>
        </div>
        <div className="mt-4 flex gap-5">
          {role == "recipient" && (
            <div>
              <Link to="/supplies">
                <Button className="bg-green-400 h-10 text-white">
                  Apply Now
                </Button>
              </Link>
              <Button
                onClick={handleWatchlist}
                className="bg-purple-400 h-10 text-white"
              >
                Add To Watchlist
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Details;
