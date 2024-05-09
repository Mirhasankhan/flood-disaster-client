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

const AdminDashboard = () => {
  const data = [
    {
      name: "Donor",
      uv: 10,

      amt: 2400,
    },
    {
      name: "Recipient",
      uv: 25,

      amt: 2500,
    },
    {
      name: "Applications",
      uv: 12,

      amt: 2290,
    },
    {
      name: "Pending",
      uv: 6,

      amt: 2000,
    },
    {
      name: "Approved",
      uv: 6,

      amt: 2181,
    },
  ];

  return (
    <div className="w-[100%]">
      <BarChart
        width={700}
        height={300}
        data={data}
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
          dataKey="pv"
          fill="#8884d8"
          activeBar={<Rectangle fill="pink" stroke="blue" />}
        />
        <Bar
          dataKey="uv"
          fill="#82ca9d"
          activeBar={<Rectangle fill="gold" stroke="purple" />}
        />
      </BarChart>
    </div>
  );
};

export default AdminDashboard;
