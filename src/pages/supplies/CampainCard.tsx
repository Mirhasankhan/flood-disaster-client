import { Progress } from "antd";
import { TSupplyCardProps } from "../../types";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";

const CampainCard = ({ campain }: TSupplyCardProps) => {
  const { overview, image, collectedAmount, category, amount, _id, title } =
    campain;

  return (
    <div className="bg-white shadow-md border overflow-hidden rounded-md">
      <img
        className="w-full h-60 hover:scale-110 transition-transform duration-300"
        src={image.imageUrl}
        alt=""
      />

      <div className="p-3">
        <h1 className="pt-3 font-bold">{title}</h1>
        <Progress
          percent={(Number(collectedAmount) / Number(amount)) * 100}
          showInfo={false}
        />
        <p className="py-2">
          <span className="font-semibold">${collectedAmount}</span> donated of
          <span className="font-semibold"> ${amount}</span> goal
        </p>
        <p className="font-semibold">Category: {category} donation</p>

        <div className="py-2">
          <h1 className=" font-medium">
            {overview.length > 100 ? `${overview.slice(0, 100)}...` : overview}
          </h1>
        </div>
        <Link to={`/campains/${_id}`} state={{ supply: campain }}>
          <button className="py-4 text-blue-600 flex items-center text-xl">
            Read More <IoIosArrowRoundForward className="text-4xl" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CampainCard;
