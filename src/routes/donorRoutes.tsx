import AddSupply from "../pages/donor/AddSupply";
import DonorDashboard from "../pages/donor/DonorDashboard";
import MySupplies from "../pages/donor/MySupplies";

export const donorPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <DonorDashboard></DonorDashboard>,
  },
  {
    name: "Add Supply",
    path: "add-supply",
    element: <AddSupply></AddSupply>,
  },
  {
    name: "My Supplies",
    path: "my-supplies",
    element: <MySupplies></MySupplies>,
  },
];
