import { TSupply } from "../../types";

const ApplicationCard = ({ application }: { application: TSupply }) => {
  const { supplyName, category, donorEmail, isApproved } = application;

  return (
    <div className="border bg-white shadow-md rounded-md overflow-hidden">
      <div className="flex justify-between px-3">
        <h1 className=" pt-3 font-bold">{supplyName}</h1>
        <h1
          className={`mt-3 px-2 rounded-lg text-white font-medium ${
            isApproved ? "bg-green-400" : "bg-red-400"
          }`}
        >
          {isApproved ? "Approved" : "Pending"}
        </h1>
      </div>
      <div className="flex justify-between p-3">
        <p>Email: {donorEmail}</p>
        <p>Category: {category}</p>
      </div>
    </div>
  );
};

export default ApplicationCard;
