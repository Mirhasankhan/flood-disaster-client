import { FloatButton } from "antd";
import { ArrowUpOutlined } from "@ant-design/icons";

const FloatingScrollToTopButton = () => {
  return (
    <FloatButton.BackTop
      icon={<ArrowUpOutlined />}
      style={{
        position: "fixed",
        bottom: 50,
        right: 50,
        zIndex: 1000,
        backgroundColor: "blue",
        color: "white",
      }}
    />
  );
};

export default FloatingScrollToTopButton;
