import { useState } from "react";
import { Modal } from "antd";
import moment from "moment";
import { TSupply } from "../../types";

const NewsModal = ({ news }: { news: TSupply }) => {
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
      <button className="text-blue-600" onClick={showModal}>
        Read News
      </button>
      <Modal
        title={news.title}
        open={isModalOpen}
        footer={false}
        onOk={handleOk}
        bodyStyle={{
          maxHeight: "60vh",
          overflowY: "auto",
        }}
        onCancel={handleCancel}
      >
        <img
          className="w-full h-64 rounded-md"
          src={news.image.imageUrl}
          alt=""
        />
        <p className="py-2 text-xs">
          Publish Time:- {moment(news.time).format("MMMM Do YYYY, h:mm a")}
        </p>
        <div dangerouslySetInnerHTML={{ __html: news.description }} />
      </Modal>
    </>
  );
};

export default NewsModal;
