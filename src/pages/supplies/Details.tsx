import { Progress } from "antd";
import { TSupplyCardProps } from "../../types";
import { GiSandsOfTime } from "react-icons/gi";
import { FaUsers } from "react-icons/fa6";
import PaymentModal from "../../components/ui/PaymentModal";
import Recent from "./Recent";

const Details = ({ campain }: TSupplyCardProps) => {
  const {
    amount,
    category,
    image,
    title,
    overview,
    description,
    collectedAmount,
  } = campain;

  return (
    <div>
      <div className="md:grid grid-cols-4 items-center">
        <div className="col-span-2">
          <div className="h-64 md:h-[384px] w-full overflow-hidden">
            <img
              className="h-full w-full object-cover"
              src={image.imageUrl}
              alt={title}
            />
          </div>
        </div>
        <div className="col-span-2 bg-white py-4 md:h-[440px] rounded-md">
          <div className="p-4 border-b-2">
            <h1>
              <span className="text-2xl font-bold">{title}</span>
            </h1>
            <h1 className="text-xl py-3 font-semibold">
              ${collectedAmount}.00
            </h1>
            <h1>donate of ${amount}.00 goal</h1>
            <Progress
              percent={(Number(collectedAmount) / Number(amount)) * 100}
              showInfo={false}
            />
            <h2 className="mt-5">
              <span className="font-semibold">Category:</span> {category}{" "}
              Donation
            </h2>
            <div className="flex items-center gap-6 py-2">
              <div className="flex items-center gap-2">
                <FaUsers className="text-xl"></FaUsers>
                <h1 className="text-xl text-orange-500">2 Donors</h1>
              </div>
              <div className="flex items-center gap-2">
                <GiSandsOfTime className="text-xl"></GiSandsOfTime>
                <h1 className="text-xl text-orange-500">December-01</h1>
              </div>
            </div>
          </div>
          <div className="p-4">
            <p>{overview}</p>
            <PaymentModal campain={campain}></PaymentModal>
          </div>
        </div>
      </div>
      <div className="mt-12 text-xl grid grid-cols-5 gap-4">
        <div className="col-span-3">
          <h1 className="text-xl font-semibold pb-2">Descriptions:</h1>
          <h1 className="text-sm">{description}</h1>
        </div>
        <div className="col-span-2">
          <h1 className="text-2xl font-semibold pb-4">Recent donations</h1>
          <Recent></Recent>
        </div>
      </div>
    </div>
  );
};

export default Details;
