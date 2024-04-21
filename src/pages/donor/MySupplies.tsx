import { Button, Image, Table } from "antd";
import { useCurrentUser } from "../../redux/features/auth/authSlice";
import {
  useDeleteMutation,
  useSuppliesQuery,
} from "../../redux/features/supply/supplyManagement.api";
import { useAppSelector } from "../../redux/hooks";
import { useAppliesQuery } from "../../redux/features/recipient/recipientManagement.api";
import { DataItem, RecordType } from "../../types";

const MySupplies = () => {
  const { email } = useAppSelector(useCurrentUser);
  const { data } = useSuppliesQuery(email);
  const [deleteSupply] = useDeleteMutation();
  const { data: applicationsData } = useAppliesQuery("");

  const handleDelete = (id: string) => {
    deleteSupply(id);
  };

  const tableData = data?.map(
    ({ _id, name, email, image, supplyName, category }: DataItem) => ({
      key: _id,
      name,
      email,
      image: image?.imageUrl,
      supplyName,
      category,
    })
  );

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (image: string) => (
        <Image
          className="rounded-full"
          width={40}
          height={40}
          src="error"
          fallback={image}
        />
      ),
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
      render: (record: RecordType) => {
        const removeObjectId = (idsArray: string[]) => {
          return idsArray.map((id: string) =>
            id.replace("ObjectId(", "").replace(")", "")
          );
        };
        const approvedReferenceIds =
          applicationsData?.map(
            (item: { referenceId: string }) => item.referenceId
          ) || [];
        const cleanedIds = removeObjectId(approvedReferenceIds);

        return (
          <div>
            {cleanedIds.includes(record.key) ? (
              <Button>Supply In-Progress</Button>
            ) : (
              <Button onClick={() => handleDelete(record.key)}>Delete</Button>
            )}
          </div>
        );
      },
    },
  ];

  return (
    <div>
      <Table dataSource={tableData} columns={columns} />
    </div>
  );
};

export default MySupplies;
