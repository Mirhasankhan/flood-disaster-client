import { Link } from "react-router-dom";
import { useSuppliesQuery } from "../../redux/features/supply/supplyManagement.api";
import { TSupply } from "../../types";
import Card from "./Card";
import { Button } from "antd";

const Supply = () => {
  const { data } = useSuppliesQuery("");

  return (
    <div>
      <div className="grid grid-cols-3 mx-12 gap-6 mt-6">
        {data?.slice(0, 6).map((supply: TSupply) => (
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
