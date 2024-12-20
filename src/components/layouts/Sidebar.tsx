import { Layout, Menu } from "antd";
import { useAppSelector } from "../../redux/hooks";
import { useCurrentRole } from "../../redux/features/auth/authSlice";
import { sidebarItemsGenerator } from "../../utils/sidebarItemsGenerator";
import { donorPaths } from "../../routes/donorRoutes";
import { adminPaths } from "../../routes/admin.routes";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo3.jpeg";

const { Sider } = Layout;

const userRole = {
  ADMIN: "admin",
  DONOR: "donor",
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

    default:
      break;
  }
  return (
    <Sider className="min-h-screen" breakpoint="lg" collapsedWidth="0">
      <div
        style={{
          color: "white",
          textAlign: "center",
          height: "4rem",
          display: "flex",
          justifyContent: "center",
          borderRight: "1px solid gray",
          alignItems: "center",
        }}
      >
        <Link className="flex items-center gap-1" to="/">
          <img className="rounded-full h-8 w-8" src={logo} alt="" />
          <h1 className="font-semibold text-xl">AltruistHub </h1>
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
