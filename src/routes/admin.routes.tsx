import AdminDashboard from "../pages/admin/AdminDashboard";
import CampainDetails from "../pages/admin/CampainDetails";
import AddCampain from "../pages/admin/AddCampain";
import AllNews from "../pages/admin/AllNews";
import FinancialStats from "../pages/admin/FinancialStats";
import AddNews from "../pages/admin/AddNews";

export const adminPaths = [
  {
    name: "Insight",
    path: "insight",
    element: <AdminDashboard></AdminDashboard>,
  },
  {
    name: "Campains",
    path: "campains",
    element: <CampainDetails></CampainDetails>,
  },
  {
    name: "News",
    path: "news",
    element: <AllNews></AllNews>,
  },
  {
    name: "Finalcial Stats",
    path: "financial-stats",
    element: <FinancialStats></FinancialStats>,
  },
  {
    name: "Add Campain",
    path: "add-campain",
    element: <AddCampain></AddCampain>,
  },
  {
    name: "Add News",
    path: "add-news",
    element: <AddNews></AddNews>,
  },
];
