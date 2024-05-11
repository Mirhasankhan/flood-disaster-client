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
import { useSuppliesQuery } from "../../redux/features/supply/supplyManagement.api";

const DonorDashboard = () => {
  const { email } = useAppSelector(useCurrentUser);
  const { data } = useSuppliesQuery(email);
  const applied = data?.filter(
    (apply: { isApplied: boolean }) => apply.isApplied == true
  );
  const notApplied = data?.filter(
    (apply: { isApplied: boolean }) => apply.isApplied == false
  );
  const approved = data?.filter(
    (apply: { isApproved: boolean }) => apply.isApproved == true
  );

  const infos = [
    {
      name: "Total Donation",
      number: data?.length,
    },
    {
      name: "not-applied",
      number: notApplied?.length,
    },
    {
      name: "Applied",
      number: applied?.length,
    },
    {
      name: "Pending",
      number: applied?.length - approved?.length,
    },
    {
      name: "Approved",
      number: approved?.length,
    },
  ];

  return (
    <div>
      <h1 className="text-center text-4xl font-semibold my-8">
        My Donation Overview
      </h1>
      <div className="w-[100%]">
        <BarChart
          width={700}
          height={300}
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
          {/* <Bar
            dataKey="pv"
            fill="#8884d8"
            activeBar={<Rectangle fill="pink" stroke="blue" />}
          /> */}
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

export default DonorDashboard;
