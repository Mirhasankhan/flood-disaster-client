import { Table } from "antd";
import { useSuppliesQuery } from "../../redux/features/supply/supplyManagement.api";
import { DataItem } from "../../types";

const DonationDetails = () => {
  const { data } = useSuppliesQuery("");

  const tableData = data?.map(
    ({ _id, name, email, contactNo, supplyName, category }: DataItem) => ({
      key: _id,
      name,
      email,
      contactNo,
      supplyName,
      category,
    })
  );

  const columns = [
    {
      title: "Donor Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Donor Email",
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
  ];

  return (
    <div>
      <Table dataSource={tableData} columns={columns} />
    </div>
  );
};

export default DonationDetails;
