import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import DashboardLayout from "../components/layouts/DashboardLayout";
import Register from "../pages/Register";
import Login from "../pages/Login";
import { routeGenerator } from "../utils/routeGenerator";
import { adminPaths } from "./admin.routes";
import { donorPaths } from "./donorRoutes";
import Supplies from "../pages/supplies/Supplies";
import SupplyDetails from "../pages/supplies/SupplyDetails";
import { receipientPaths } from "./recipient.routes";
import Home from "../pages/Home/Home";
import Testimonials from "../pages/testimonials/Testimonials";
import LeaderBoard from "../pages/LeaderBoard";
import AdminRoute from "./AdminRoute";
import DonorRoute from "./DonorRoute";
import RecipientRoute from "./RecepientRoute";
import Community from "../pages/community/Community";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/supplies",
        element: <Supplies></Supplies>,
      },
      {
        path: "/supplies/:id",
        element: <SupplyDetails></SupplyDetails>,
      },
      {
        path: "/testimonials",
        element: <Testimonials></Testimonials>,
      },
      {
        path: "/leaderboard",
        element: <LeaderBoard></LeaderBoard>,
      },
      {
        path: "/community",
        element: <Community></Community>,
      },
    ],
  },
  {
    path: "/admin",
    element: (
      <AdminRoute>
        <DashboardLayout></DashboardLayout>
      </AdminRoute>
    ),
    children: routeGenerator(adminPaths),
  },
  {
    path: "/donor",
    element: (
      <DonorRoute>
        <DashboardLayout></DashboardLayout>
      </DonorRoute>
    ),
    children: routeGenerator(donorPaths),
  },
  {
    path: "/recipient",
    element: (
      <RecipientRoute>
        <DashboardLayout></DashboardLayout>
      </RecipientRoute>
    ),
    children: routeGenerator(receipientPaths),
  },

  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
]);

export default router;
