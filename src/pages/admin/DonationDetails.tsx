import { useSuppliesQuery } from "../../redux/features/supply/supplyManagement.api";
import { DataItem } from "../../types";

const DonationDetails = () => {
  const { data } = useSuppliesQuery("");
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table bg-white">
          <thead>
            <tr className="bg-gray-600 text-white">
              <th>SL</th>
              <th>Donor Name</th>
              <th>Donor Email</th>
              <th>Supply Name</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((donor: DataItem, i: string) => (
              <tr key={donor._id} className="hover">
                <th>{i + 1}</th>
                <td>{donor.name}</td>
                <td>{donor.email}</td>
                <td>{donor.supplyName}</td>
                <td>{donor.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DonationDetails;
