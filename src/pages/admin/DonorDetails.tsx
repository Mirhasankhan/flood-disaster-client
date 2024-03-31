import { Table } from "antd";
import { useUsersQuery } from "../../redux/features/users/userManagement.api";

const DonorDetails = () => {
  const { data } = useUsersQuery("donor");
  console.log(data);

  const tableData = data?.map(
    ({ _id, name, email, contactNo, supplyName, Category }) => ({
      key: _id,
      name,
      email,
      contactNo,
      supplyName,
      Category,
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
      title: "Contact No",
      dataIndex: "contactNo",
      key: "contactNo",
    },
    {
      title: "Supply Name",
      dataIndex: "supplyName",
      key: "supplyName",
    },
    {
      title: "Category",
      dataIndex: "Category",
      key: "category",
    },
  ];

  return (
    <div>
      <Table dataSource={tableData} columns={columns} />
    </div>
  );
};

export default DonorDetails;
