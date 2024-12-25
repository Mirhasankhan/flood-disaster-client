import { FaEdit } from "react-icons/fa";
import { useSuppliesQuery } from "../../redux/features/supply/supplyManagement.api";
import { TSupply } from "../../types";
import { MdDeleteForever } from "react-icons/md";

const CampainDetails = () => {
  const { data } = useSuppliesQuery("");
  return (
    <div>
      <h1 className="text-center py-6 text-xl md:text-4xl text-white">
        Campains Overview
      </h1>
      <div className="overflow-x-auto">
        <table className="table bg-white">
          <thead>
            <tr className="bg-gray-600 text-white">
              <th>SL</th>
              <th>Campain Name</th>
              <th>Category</th>
              <th>Donation Target</th>
              <th>Collected</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((donor: TSupply, i: string) => (
              <tr key={donor._id} className="hover">
                <th>{i + 1}</th>
                <td>{donor.title}</td>
                <td>{donor.category}</td>
                <td>${donor.amount}</td>
                <td>${donor.collectedAmount}</td>
                <td className="flex gap-1 text-xl cursor-pointer">
                  <FaEdit className="text-green-500"></FaEdit>{" "}
                  <MdDeleteForever className="text-red-500"></MdDeleteForever>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CampainDetails;
