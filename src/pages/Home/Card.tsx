import { Link } from "react-router-dom";
import { TSupplyCardProps } from "../../types";
import { Progress } from "antd";

const Card = ({ campain }: TSupplyCardProps) => {
  const { title, overview, image, _id, collectedAmount, amount, category } =
    campain;

  return (
    <div className="my-12 mx-2 p-3 bg-gray-100 shadow-md rounded-md ">
      <img
        className="w-full h-[250px] rounded-sm "
        src={image.imageUrl}
        alt=""
      />
      <div className="relative border-blue-600  rounded-md  ">
        <h1 className="pt-3 text-xl font-bold">{title}</h1>
        <h1 className="py-2 font-medium">
          {overview.length > 55 ? `${overview.slice(0, 55)}...` : overview}
        </h1>
        <div className="flex justify-between items-center">
          <h1>
            <span className="font-bold">${collectedAmount}</span> Raised
          </h1>
          <Progress
            size={40}
            percent={Math.round(
              (Number(collectedAmount) / Number(amount)) * 100
            )}
            type="circle"
          />
          <h1>
            <span className="font-bold">${amount}</span> Goal
          </h1>
        </div>
        <Progress
          percent={(Number(collectedAmount) / Number(amount)) * 100}
          showInfo={false}
        />
        <Link to={`/campains/${_id}`} state={{ supply: campain }}>
          <button className="p-2 mt-2 rounded-md bg-[#ffa415] text-white w-full border text-xl">
            Donate
          </button>
        </Link>
        {/* <button className="relative px-6 py-2 w-full overflow-hidden text-black bg-white border border-gray-300 rounded-md group">
          <span className="relative z-10">Hover Me</span>
          <span className="absolute inset-0 bg-red-500 transform scale-x-0 origin-left transition-transform duration-1000 group-hover:scale-x-100"></span>
        </button> */}

        <h1 className="absolute left-3 -top-10 text-white bg-black bg-opacity-40 px-3 font-semibold py-1 rounded-md">
          {category}
        </h1>
      </div>
    </div>
  );
};

export default Card;
