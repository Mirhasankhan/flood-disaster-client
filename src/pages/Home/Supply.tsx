import { Link } from "react-router-dom";
import { useSuppliesQuery } from "../../redux/features/supply/supplyManagement.api";
import { TSupply } from "../../types";
import Card from "./Card";
import { Button } from "antd";

const Supply = () => {
  const { data } = useSuppliesQuery("");
  const unApproved = data?.filter(
    (a: { isApproved: boolean }) => a.isApproved == false
  );

  return (
    <div className="mx-6 md:mx-12">
      <h1 className="text-xl font-semibold mt-6">Top Supplies</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mt-6">
        {unApproved?.slice(0, 6).map((supply: TSupply) => (
          <Card supply={supply} key={supply._id}></Card>
        ))}
      </div>
      <Link to="/supplies" className="flex justify-center my-6">
        <Button>View All Supplies</Button>
      </Link>
    </div>
  );
};

export default Supply;
