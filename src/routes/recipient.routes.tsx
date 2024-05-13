import ApplicationUpdates from "../pages/recipient/ApplicationUpdates";
import RecipientDashboard from "../pages/recipient/RecipientDashboard";

export const receipientPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <RecipientDashboard></RecipientDashboard>,
  },
  {
    name: "Application Updates",
    path: "application-updates",
    element: <ApplicationUpdates></ApplicationUpdates>,
  },
];
