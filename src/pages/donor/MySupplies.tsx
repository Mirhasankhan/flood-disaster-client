import { Button } from "antd";
import { useCurrentUser } from "../../redux/features/auth/authSlice";
import {
  useDeleteMutation,
  useSuppliesQuery,
} from "../../redux/features/supply/supplyManagement.api";
import { useAppSelector } from "../../redux/hooks";
import { useAppliesQuery } from "../../redux/features/recipient/recipientManagement.api";
import { DataItem } from "../../types";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const MySupplies2 = () => {
  const { email } = useAppSelector(useCurrentUser);
  const { data } = useSuppliesQuery(email);
  const [deleteSupply] = useDeleteMutation();
  const { data: applicationsData } = useAppliesQuery("");

  let cleanedIds: string[] = [];
  if (applicationsData) {
    const removeObjectId = (idsArray: string[]) => {
      return idsArray.map((id: string) =>
        id.replace("ObjectId(", "").replace(")", "")
      );
    };
    const approvedReferenceIds = applicationsData.map(
      (item: { referenceId: string }) => item.referenceId
    );
    cleanedIds = removeObjectId(approvedReferenceIds);
  }

  const handleDelete = (id: string) => {
    deleteSupply(id);
    toast.success("Supply Deleted");
  };

  return (
    <div>
      {data && data.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table">
            <thead className="bg-gray-600 text-white">
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Email</th>
                <th>Supply Name</th>
                <th>Category</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {data?.map((supply: DataItem) => (
                <tr key={supply._id}>
                  <th>
                    <img
                      className="w-12 h-12 rounded-full"
                      src={supply.image?.imageUrl}
                      alt=""
                    />
                  </th>
                  <td>{supply.name}</td>
                  <td>{supply.email}</td>
                  <td>{supply.supplyName}</td>
                  <td>{supply.category}</td>
                  <td>
                    {cleanedIds.includes(supply._id) ? (
                      <Button>Supply In-Progress</Button>
                    ) : (
                      <div className="flex gap-2">
                        <Button onClick={() => handleDelete(supply._id)}>
                          Delete
                        </Button>
                        <Button>Edit</Button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div>
          <h1 className="text-3xl pb-4  mt-24 font-semibold text-red-600">
            No Supply Added Yet
          </h1>
          <Link to="/donor/add-supply">
            <Button>Add Supply</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default MySupplies2;
