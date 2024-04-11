import { Button, Table } from "antd";
import { useAppliesQuery } from "../../redux/features/recipient/recipientManagement.api";
import {
  useApproveApplyMutation,
  useDenyMutation,
} from "../../redux/features/users/userManagement.api";
import { useUpdateSupplyStatusMutation } from "../../redux/features/supply/supplyManagement.api";
import { DataItem, RecordType } from "../../types";

const MySupplies = () => {
  const { data } = useAppliesQuery("");
  const [denyApplication] = useDenyMutation();
  const [updateStatus] = useUpdateSupplyStatusMutation();
  const [approveApplication] = useApproveApplyMutation();

  const handleDeny = (id: string, referenceId: string) => {
    denyApplication(id);
    updateStatus({ id: referenceId, isApplied: false });
  };
  console.log(data);

  const extractNumberValue = (objectIdString: string) => {
    const numberValue = objectIdString.split("(")[1].split(")")[0];
    return numberValue;
  };

  const tableData = data?.map(
    ({
      _id,
      name,
      email,
      supplyName,
      category,
      referenceId,
      isApproved,
    }: DataItem) => ({
      key: _id,
      name,
      email,
      supplyName,
      category,
      referenceId,
      isApproved,
    })
  );

  const columns = [
    {
      title: "Recipient Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Recipient Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Supply Name",
      dataIndex: "supplyName",
      key: "supplyName",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Action",
      key: "action",
      render: (record: RecordType) => (
        <div>
          <Button
            disabled={record.isApproved}
            onClick={() =>
              approveApplication({ id: record.key, isApproved: true })
            }
          >
            {record.isApproved ? "Approved" : "Approve"}
          </Button>
          <Button
            className={`${record.isApproved ? "hidden" : "block"}`}
            onClick={() =>
              handleDeny(record.key, extractNumberValue(record.referenceId))
            }
          >
            Deny
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <Table dataSource={tableData} columns={columns} />
    </div>
  );
};

export default MySupplies;
