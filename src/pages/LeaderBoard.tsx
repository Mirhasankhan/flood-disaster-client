import { useLeaderboardQuery } from "../redux/features/users/userManagement.api";

const LeaderBoard = () => {
  const { data } = useLeaderboardQuery("");

  return (
    <div>
      <h1 className="text-center text-2xl font-semibold py-6 md:text-4xl">
        Leader Board
      </h1>
      <div className="w-4/5 md:w-2/3 mx-auto">
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
                  <tr className="mb-4" key={index}>
                    <th>{index + 1}</th>
                    <td>{leader.name}</td>
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
