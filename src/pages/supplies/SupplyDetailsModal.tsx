import { Button, Modal } from "antd";
import { useState } from "react";
import { TSupply } from "../../types";
import { useAppSelector } from "../../redux/hooks";
import { useCurrentUser } from "../../redux/features/auth/authSlice";
import { Link } from "react-router-dom";

const SupplyDetailsModal = ({ supply }: { supply: TSupply }) => {
  const { image, supplyName, contactNo, email, name, amount, category } =
    supply;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { role } = useAppSelector(useCurrentUser);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-full">
      <Button
        className="bg-green-400 h-10 rounded-lg py-2 w-full text-white font-semibold"
        onClick={showModal}
      >
        View Details
      </Button>
      <Modal
        title="Supply Descriptions"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <div className="flex flex-col items-center  border-2 p-2 m-6 rounded-md">
          <div className="flex flex-col items-center relative">
            <img
              className="w-20 h-20 rounded-full"
              src={image.imageUrl}
              alt=""
            />
            <h1 className=" md:text-3xl font-bold py-3 text-center ">
              {supplyName}
              <span className="absolute top-20 right--8 text-sm px-1 rounded-md text-green-500 border">
                {category}
              </span>
            </h1>
          </div>
          <div className="md:grid grid-cols-2 my-3">
            <p className="text-[12px] font-semibold">Donor Name: {name}</p>
            <p className="text-[12px] font-semibold">Email: {email}</p>
            <p className="text-[12px] font-semibold">Contact No: {contactNo}</p>
            <p className="text-[12px] font-semibold">Amount: ${amount}</p>
          </div>
          <Button>
            {role == "donor" ? (
              <Link to="/donor/add-supply">Donate</Link>
            ) : (
              <Link to={"/supplies"}>Apply Now</Link>
            )}
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default SupplyDetailsModal;
