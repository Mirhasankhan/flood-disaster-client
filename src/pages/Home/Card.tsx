import { Link } from "react-router-dom";
import { TSupplyCardProps } from "../../types";
import { IoIosArrowRoundForward } from "react-icons/io";

const Card = ({ campain }: TSupplyCardProps) => {
  const { title, overview, image, _id } = campain;

  return (
    <div className="relative my-12 border mx-2  shadow-md rounded-md ">
      <img className="w-full h-[400px] " src={image.imageUrl} alt="" />
      <div className="absolute -bottom-16 border-b-2 border-blue-600 left-7 p-2 bg-white rounded-md  w-5/6 mx-auto">
        <h1 className="pl-2 pt-3 text-xl font-semibold">{title}</h1>
        <h1 className="pl-2 py-2 font-medium">
          {overview.length > 55 ? `${overview.slice(0, 55)}...` : overview}
        </h1>
        <Link to={`/campains/${_id}`} state={{ supply: campain }}>
          <button className="py-4 pl-3 text-blue-600 flex items-center text-xl">
            Read More <IoIosArrowRoundForward className="text-4xl" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
