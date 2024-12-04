import { useSuppliesQuery } from "../../redux/features/supply/supplyManagement.api";
import { TSupply } from "../../types";

const CampainDetails = () => {
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
            {data?.map((donor: TSupply, i: string) => (
              <tr key={donor._id} className="hover">
                <th>{i + 1}</th>
                <td>{donor.title}</td>
                <td>{donor.amount}</td>
                <td>{donor.overview}</td>
                <td>{donor.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CampainDetails;
