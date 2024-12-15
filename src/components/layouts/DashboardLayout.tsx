import { Layout } from "antd";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const { Header, Content } = Layout;

const DashboardLayout = () => {
  return (
    <Layout>
      <Sidebar></Sidebar>
      <Layout>
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: "0px 0px 0" }}>
          <div
            className="min-h-screen bg-[#1a2c52]"
            style={{
              padding: "16px",

              // backgroundImage: "white",
              // backgroundImage: "linear-gradient(to right, #211e3d, #561c3e)",
            }}
          >
            <Outlet></Outlet>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
