import { Table } from "antd";
import { useCurrentUser } from "../../redux/features/auth/authSlice";
import { useDonationsQuery } from "../../redux/features/users/userManagement.api";
import { useAppSelector } from "../../redux/hooks";
import { TSupply } from "../../types";

const MyDonations = () => {
  const { email } = useAppSelector(useCurrentUser);
  const { data: donations } = useDonationsQuery(email);
  const tableData = donations?.map(
    ({ _id, title, name, email, contactNumber, image, amount }: TSupply) => ({
      _id,
      name,
      email,
      contactNumber,
      title,
      image,
      amount,
    })
  );
  const columns = [
    {
      title: "User Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Camapain Details",
      render: (record: TSupply) => (
        <div className="flex items-center gap-1">
          <img
            className="h-12 w-12 rounded-full"
            src={record.image.imageUrl}
            alt=""
          />
          <div className="font-bold">{record.title}</div>
        </div>
      ),
      key: "name",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "age",
    },
    {
      title: "Contact Number",
      dataIndex: "contactNumber",
      key: "address",
    },
  ];

  return (
    <div>
      <Table
        pagination={{ pageSize: 6 }}
        dataSource={tableData}
        columns={columns}
      />
    </div>
  );
};

export default MyDonations;
