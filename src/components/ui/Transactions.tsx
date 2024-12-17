import { Table } from "antd";
import { useDonationsQuery } from "../../redux/features/users/userManagement.api";
import { TSupply } from "../../types";

const Transactions = () => {
  const { data } = useDonationsQuery("");
  const generateRandomId = () => {
    return (
      Math.random().toString(16).slice(2) + Math.random().toString(16).slice(2)
    );
  };

  const tableData = data?.map(
    ({ _id, name, amount, email, contactNumber }: TSupply, index: number) => ({
      index: index + 1,
      _id,
      name,
      email,
      amount,
      contactNumber,
    })
  );

  const columns = [
    {
      title: "SL",
      render: (record: TSupply) => (
        <div className="flex items-center gap-1">
          <h1>{record.index}</h1>
        </div>
      ),
      key: "name",
    },
    {
      title: "User Name",
      dataIndex: "name",
      key: "name",
    },

    {
      title: "Email",
      dataIndex: "email",
      key: "age",
    },
    {
      title: "Transaction ID",
      render: () => <h1>{generateRandomId()}</h1>,
      key: "age",
    },
    {
      title: "Amount Of Donation",
      render: (record: TSupply) => <h1>${record.amount}</h1>,
      key: "name",
    },
  ];
  return (
    <div>
      <Table
        pagination={{ pageSize: 5 }}
        dataSource={tableData}
        columns={columns}
      />
    </div>
  );
};

export default Transactions;
