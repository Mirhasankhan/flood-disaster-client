import CampainDetails from "../pages/admin/CampainDetails";
import AddCampain from "../pages/admin/AddCampain";
import AllNews from "../pages/admin/AllNews";
import AddNews from "../pages/admin/AddNews";
import DonorDashboard from "../pages/donor/DonorDashboard";

export const adminPaths = [
  {
    name: "Insight",
    path: "insight",
    element: <DonorDashboard></DonorDashboard>,
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
