import { useLocation } from "react-router-dom";
import { useSingleSupplyQuery } from "../../redux/features/supply/supplyManagement.api";
import { Button, Modal } from "antd";
import { useState } from "react";
import { DataItem } from "../../types";

const SupplyDetails = () => {
  const location = useLocation();
  const supplyId = location.state;
  const { data } = useSingleSupplyQuery(supplyId, { skip: !supplyId });

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
        {data?.map((detail: DataItem) => (
          <p>{detail._id}</p>
        ))}
      </Modal>
    </>
  );
};

export default SupplyDetails;
