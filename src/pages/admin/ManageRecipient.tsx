import { Button } from "antd";
import { useAppliesQuery } from "../../redux/features/recipient/recipientManagement.api";
import { useUpdateSupplyStatusMutation } from "../../redux/features/supply/supplyManagement.api";
import {
  useApproveApplyMutation,
  useDenyMutation,
} from "../../redux/features/users/userManagement.api";
import { DataItem } from "../../types";
import { toast } from "sonner";

const ManageRecipient2 = () => {
  const { data } = useAppliesQuery("");
  const [denyApplication] = useDenyMutation();
  const [updateStatus] = useUpdateSupplyStatusMutation();
  const [approveApplication] = useApproveApplyMutation();

  const handleDeny = (id: string, referenceId: string) => {
    denyApplication(id);
    updateStatus({ id: referenceId, isApplied: false });
  };

  const extractNumberValue = (objectIdString: string) => {
    const numberValue = objectIdString.split("(")[1].split(")")[0];
    return numberValue;
  };
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="bg-gray-600 text-white">
            <tr>
              <th>Recipient Name</th>
              <th>Recipient Email</th>
              <th>Supply Name</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((recepient: DataItem) => (
              <tr key={recepient._id} className="bg-white">
                <th>{recepient.name}</th>
                <th>{recepient.email}</th>
                <th>{recepient.supplyName}</th>
                <th>{recepient.category}</th>
                <th>
                  <div className="flex gap-4">
                    <Button
                      disabled={recepient.isApproved}
                      onClick={() => {
                        approveApplication({
                          id1: recepient._id,
                          id2: extractNumberValue(
                            recepient.referenceId as string
                          ),
                          isApproved: true,
                        });
                        toast.success("Application approved!");
                      }}
                    >
                      {recepient.isApproved ? "Approved" : "Approve"}
                    </Button>
                    <Button
                      className={`${recepient.isApproved ? "hidden" : "block"}`}
                      onClick={() => {
                        handleDeny(
                          recepient._id,
                          extractNumberValue(recepient.referenceId as string)
                        );
                        toast.error("Application denied!");
                      }}
                    >
                      Deny
                    </Button>
                  </div>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageRecipient2;
