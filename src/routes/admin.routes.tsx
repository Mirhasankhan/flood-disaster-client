import AdminDashboard from "../pages/admin/AdminDashboard";
import DonationDetails from "../pages/admin/DonationDetails";
import ManageRecipient from "../pages/admin/ManageRecipient";
import AddCampain from "../pages/donor/AddCampain";

export const adminPaths = [
  {
    name: "Insight",
    path: "insight",
    element: <AdminDashboard></AdminDashboard>,
  },
  {
    name: "Campains",
    path: "campains",
    element: <DonationDetails></DonationDetails>,
  },
  {
    name: "News",
    path: "news",
    element: <ManageRecipient></ManageRecipient>,
  },
  {
    name: "Finalcial Stats",
    path: "financial-stats",
    element: <ManageRecipient></ManageRecipient>,
  },
  {
    name: "Add Campain",
    path: "add-campain",
    element: <AddCampain></AddCampain>,
  },
  {
    name: "Add News",
    path: "add-news",
    element: <ManageRecipient></ManageRecipient>,
  },
];
