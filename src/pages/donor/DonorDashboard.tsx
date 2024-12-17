import chart1 from "../../assets/images/t1.png";
import chart2 from "../../assets/images/t2.png";
import Transactions from "../../components/ui/Transactions";

const DonorDashboard = () => {
  return (
    <div className="text-white">
      <h1 className="text-2xl md:text-4xl font-bold pb-12">
        Altruist Hub Insight
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="bg-[#001529] border-t-2 border-blue-400 text-center p-2">
          <h1 className="text-xl font-semibold">Total Campains</h1>
          <p className="text-xl py-1">total</p>
          <p className="text-blue-400">Upcoming Camapins 3</p>
        </div>
        <div className="bg-[#001529] border-t-2 border-blue-400 text-center p-2">
          <h1 className="text-xl font-semibold">Total News</h1>
          <p className="text-xl py-1">total</p>
          <p className="text-blue-400">Upcoming Camapins 3</p>
        </div>
        <div className="bg-[#001529] border-t-2 border-blue-400 text-center p-2">
          <h1 className="text-xl font-semibold">Total Donations</h1>
          <p className="text-xl py-1">total</p>
          <p className="text-blue-400">Upcoming Camapins 3</p>
        </div>
        <div className="bg-[#001529] border-t-2 border-blue-400 text-center p-2">
          <h1 className="text-xl font-semibold">Total Fund Collected</h1>
          <p className="text-xl py-1">total</p>
          <p className="text-blue-400">Upcoming Camapins 3</p>
        </div>
      </div>
      <div className="grid grid-cols md:grid-cols-2 gap-6 pt-8">
        <img src={chart1} alt="" />
        <img src={chart2} alt="" />
      </div>
      <div>
        <h1 className="text-2xl py-6 text-center">Transaction History</h1>
        <Transactions></Transactions>
      </div>
    </div>
  );
};

export default DonorDashboard;
