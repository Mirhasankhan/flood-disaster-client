import { useLeaderboardQuery } from "../redux/features/users/userManagement.api";
import { GiQueenCrown } from "react-icons/gi";

const LeaderBoard = () => {
  const { data } = useLeaderboardQuery("");

  return (
    <div>
      <h1 className="text-center text-2xl font-semibold py-6 md:text-4xl">
        Donor Leaderboard
      </h1>
      <div className="w-4/5 md:w-2/3 mx-auto bg-purple-200 p-4 rounded-md ">
        <div className="overflow-x-auto">
          <table className="table">
            <thead className="bg-gray-600 text-white">
              <tr>
                <th>Rank</th>
                <th>Donor Name</th>
                <th>Donor Email</th>
                <th>Number Of Donation</th>
              </tr>
            </thead>
            <tbody>
              {data?.map(
                (
                  leader: { email: string; frequency: number; name: string },
                  index: string
                ) => (
                  <tr key={index}>
                    <th>{index + 1}</th>
                    <td className="flex items-center gap-2">
                      {leader.name}
                      <GiQueenCrown className="text-orange-400 text-xl" />
                    </td>
                    <td>{leader.email}</td>
                    <td>{leader.frequency}</td>
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
