import { Button, Modal } from "antd";
import { useState } from "react";
import { TSupply } from "../../types";

const SupplyDetailsModal = ({ supply }: { supply: TSupply }) => {
  const { image, supplyName, contactNo, email, name, amount, category } =
    supply;
  const [isModalOpen, setIsModalOpen] = useState(false);

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
            <h1 className="text-3xl font-bold py-3 text-center ">
              {supplyName}
              <span className="absolute top-20 right--8 text-sm px-1 rounded-md text-green-500 border">
                {category}
              </span>
            </h1>
          </div>
          <div className="grid grid-cols-2">
            <p className="font-semibold p-3">Donor Name: {name}</p>
            <p className="font-semibold p-3">Donor Email: {email}</p>
            <p className="font-semibold p-3">Contact No: {contactNo}</p>
            <p className="font-semibold p-3">Amount: ${amount}</p>
          </div>
          <Button>Donate Now</Button>
        </div>
      </Modal>
    </div>
  );
};

export default SupplyDetailsModal;
