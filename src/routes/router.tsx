import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import DashboardLayout from "../components/layouts/DashboardLayout";
import Register from "../pages/Register";
import Login from "../pages/Login";
import ProtectedRoute from "../components/layouts/ProtectedRoute";
import { routeGenerator } from "../utils/routeGenerator";
import { adminPaths } from "./admin.routes";
import { donorPaths } from "./donorRoutes";
import Supplies from "../pages/supplies/Supplies";
import SupplyDetails from "../pages/supplies/SupplyDetails";
import { receipientPaths } from "./recipient.routes";
import Home from "../pages/Home/Home";
import Testimonials from "../pages/testimonials/Testimonials";

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
    ],
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute>
        <DashboardLayout></DashboardLayout>
      </ProtectedRoute>
    ),
    children: routeGenerator(adminPaths),
  },
  {
    path: "/donor",
    element: (
      <ProtectedRoute>
        <DashboardLayout></DashboardLayout>
      </ProtectedRoute>
    ),
    children: routeGenerator(donorPaths),
  },
  {
    path: "/recipient",
    element: (
      <ProtectedRoute>
        <DashboardLayout></DashboardLayout>
      </ProtectedRoute>
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
