import { TSupplyCardProps } from "../../types";

const Details = ({ supply }: TSupplyCardProps) => {
  const { amount, category, image, email, name, supplyName } = supply;
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
        <h2 className="border-b pb-2">Donor: {email}</h2>
        <h2 className="mt-5">
          <span className="font-semibold">Category:</span> {category}
        </h2>
        <h1>Amount: ${amount}</h1>
        <h1 className="">
          We are grate to donor MR.
          <span className="text-red-300">{name}</span>
        </h1>
      </div>
    </div>
  );
};

export default Details;
