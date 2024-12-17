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
      <button
        onClick={showModal}
        className="relative px-6 py-2 overflow-hidden text-white bg-black mt-2  rounded-full group"
      >
        <span className="relative z-10">Read More</span>
        <span className="absolute inset-0 bg-orange-400 transform scale-x-0 origin-left transition-transform duration-1000 group-hover:scale-x-100"></span>
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
