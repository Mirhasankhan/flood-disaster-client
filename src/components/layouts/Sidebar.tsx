import { Layout, Menu } from "antd";
import { useAppSelector } from "../../redux/hooks";
import { useCurrentRole } from "../../redux/features/auth/authSlice";
import { sidebarItemsGenerator } from "../../utils/sidebarItemsGenerator";
import { donorPaths } from "../../routes/donorRoutes";
import { adminPaths } from "../../routes/admin.routes";
import { receipientPaths } from "../../routes/recipient.routes";
import { Link } from "react-router-dom";

const { Sider } = Layout;

const userRole = {
  ADMIN: "admin",
  DONOR: "donor",
  RECIPIENT: "recipient",
};

const Sidebar = () => {
  const role = useAppSelector(useCurrentRole);

  let sidebarItems;

  switch (role) {
    case userRole.ADMIN:
      sidebarItems = sidebarItemsGenerator(adminPaths, userRole.ADMIN);
      break;
    case userRole.DONOR:
      sidebarItems = sidebarItemsGenerator(donorPaths, userRole.DONOR);
      break;
    case userRole.RECIPIENT:
      sidebarItems = sidebarItemsGenerator(receipientPaths, userRole.RECIPIENT);
      break;

    default:
      break;
  }
  return (
    <Sider breakpoint="lg" collapsedWidth="0">
      <div
        style={{
          color: "white",
          textAlign: "center",
          height: "4rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link to="/">
          <h1 className="font-semibold">FloodCare </h1>
        </Link>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sidebarItems}
      />
    </Sider>
  );
};

export default Sidebar;
