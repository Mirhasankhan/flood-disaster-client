import Lottie from "lottie-react";
import { useLeaderboardQuery } from "../redux/features/users/userManagement.api";
import { GiQueenCrown } from "react-icons/gi";
import spinner from "../assets/loading.json";
import { TSupply } from "../types";
import { Table } from "antd";

const LeaderBoard = () => {
  const { data, isLoading } = useLeaderboardQuery("");
  const tableData = data?.leaderboard.map(
    ({ _id, name, totalAmount, contactNumber }: TSupply, index: number) => ({
      index: index + 1,
      _id,
      name,
      totalAmount,
      contactNumber,
    })
  );

  const columns = [
    {
      title: "Rank",
      render: (record: TSupply) => (
        <div className="flex items-center gap-1">
          <GiQueenCrown className="text-orange-500" />
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
      dataIndex: "_id",
      key: "age",
    },
    {
      title: "Amount Of Donation",
      render: (record: TSupply) => <h1>${record.totalAmount}</h1>,
      key: "name",
    },
  ];

  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
        <Lottie
          style={{ height: "200px", width: "300px" }}
          animationData={spinner}
          loop={true}
        />
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-[#211e3d] to-[#561c3e] min-h-screen">
      <h1 className="text-center text-2xl text-white font-semibold pb-2 pt-6 md:text-4xl">
        Donor Leaderboard
      </h1>
      <p className="text-white text-center pb-6">
        Celebrating the generosity of our top contributors who are making a
        difference.
      </p>
      <div className="w-3/4 mx-auto">
        <Table
          pagination={{ pageSize: 5 }}
          dataSource={tableData}
          columns={columns}
        />
      </div>
    </div>
  );
};

export default LeaderBoard;
