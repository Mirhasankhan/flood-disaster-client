import Lottie from "lottie-react";
import { useLeaderboardQuery } from "../redux/features/users/userManagement.api";
import { GiQueenCrown } from "react-icons/gi";
import spinner from "../assets/loading.json";

const LeaderBoard = () => {
  const { data, isLoading } = useLeaderboardQuery("");

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
      <h1 className="text-center text-2xl text-white font-semibold py-6 md:text-4xl">
        Donor Leaderboard
      </h1>
      <div className="w-4/5 md:w-3/4 mx-auto bg-white p-2 rounded-md ">
        <div className="overflow-x-auto">
          <table className="table">
            <thead className="bg-blue-600  text-white">
              <tr>
                <th>Rank</th>
                <th>Donor Name</th>
                <th>Donor Email</th>
                <th>Amount Of Donation</th>
              </tr>
            </thead>
            <tbody>
              {data?.leaderboard.map(
                (
                  leader: { _id: string; totalAmount: number; name: string },
                  index: number
                ) => (
                  <tr
                    className={` ${
                      index % 2 === 0
                        ? "bg-gray-500 text-white"
                        : "bg-white text-black"
                    }`}
                    key={index}
                  >
                    <th>Rank 0{index + 1}</th>
                    <td className="flex items-center gap-2">
                      {leader.name}
                      <GiQueenCrown className="text-orange-400 text-xl" />
                    </td>
                    <td>{leader._id}</td>
                    <td>${leader.totalAmount}</td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LeaderBoard;
