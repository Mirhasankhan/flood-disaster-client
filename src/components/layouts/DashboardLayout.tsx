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
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 650,
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
