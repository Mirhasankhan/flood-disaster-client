import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { useAppSelector } from "../../redux/hooks";
import { useCurrentUser } from "../../redux/features/auth/authSlice";
import { useAppliesQuery } from "../../redux/features/recipient/recipientManagement.api";

const RecipientDashboard = () => {
  const { email } = useAppSelector(useCurrentUser);
  const { data } = useAppliesQuery(email);

  const approved = data?.filter(
    (apply: { isApproved: boolean }) => apply.isApproved == true
  );

  const infos = [
    {
      name: "Applied",
      number: data?.length,
    },
    {
      name: "Approved",
      number: approved?.length,
    },
    {
      name: "Pending",
      number: data?.length - approved?.length,
    },
  ];

  return (
    <div>
      <h1 className="text-center text-4xl font-semibold my-8">
        My Application Overview
      </h1>
      <div className="w-[100%]">
        <BarChart
          width={900}
          height={450}
          data={infos}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="number"
            fill="#82ca9d"
            activeBar={<Rectangle fill="gold" stroke="purple" />}
          />
        </BarChart>
      </div>
    </div>
  );
};

export default RecipientDashboard;
