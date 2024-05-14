import { Button } from "antd";
import { TSupplyCardProps } from "../../types";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const Details = ({ supply }: TSupplyCardProps) => {
  const { amount, category, image, email, supplyName, name } = supply;
  const handleWatchlist = () => {
    toast.success("Supply has been added to watchlist!");
  };
  return (
    <div className="md:grid grid-cols-4 gap-6">
      <div className="col-span-2 p-3">
        <img
          className="h-64 md:h-80 rounded-md w-full"
          src={image.imageUrl}
          alt=""
        />
      </div>
      <div className="col-span-2 mt-3">
        <h1 className="text-xl font-semibold"> {supplyName}</h1>
        <h1>Donor Name: {name}</h1>
        <h2 className="border-b pb-2">Donor Email: {email}</h2>
        <h2 className="mt-5">
          <span className="font-semibold">Category:</span> {category}
        </h2>
        <h1 className="text-2xl text-orange-500 pt-5">Amount: ${amount}</h1>
        <div className="mt-4 flex gap-5">
          <Link to="/supplies">
            <Button className="bg-green-400 h-10 text-white">Apply Now</Button>
          </Link>
          <Button
            onClick={() => handleWatchlist()}
            className="bg-purple-400 h-10 text-white"
          >
            Add To Watchlist
          </Button>
        </div>
        {/* <h1 className="">
          We are grateful to donor MR.
          <span className="text-red-300">{name}</span>
        </h1> */}
      </div>
    </div>
  );
};

export default Details;
