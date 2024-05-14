import { useNavigate } from "react-router-dom";
import { TSupply } from "../../types";

const Related = ({ related }: { related: TSupply }) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/supplies/${related._id}`, { state: { supply: related } });
  };

  return (
    <div
      onClick={handleNavigate}
      className="flex gap-2 mb-4 cursor-pointer border-b pb-1 "
    >
      <div>
        <img
          className="w-20 h-20 rounded-lg"
          src={related.image.imageUrl}
          alt=""
        />
      </div>
      <div>
        <h1>{related.supplyName} </h1>
        <p className="text-orange-600">Amount: ${related.amount}</p>
      </div>
    </div>
  );
};

export default Related;
