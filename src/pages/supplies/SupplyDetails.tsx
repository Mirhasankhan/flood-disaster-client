import { useLocation } from "react-router-dom";
import { useSingleSupplyQuery } from "../../redux/features/supply/supplyManagement.api";
import { Button, Modal } from "antd";
import { useState } from "react";

const SupplyDetails = () => {
  const location = useLocation();
  const supplyId = location.state;
  const { data } = useSingleSupplyQuery(supplyId, { skip: !supplyId });
  console.log(data);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {data?.map((detail) => (
          <p>jll</p>
        ))}
      </Modal>
    </>
  );
};

export default SupplyDetails;
