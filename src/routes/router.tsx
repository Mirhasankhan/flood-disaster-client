import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import DashboardLayout from "../components/layouts/DashboardLayout";
import Register from "../pages/Register";
import Login from "../pages/Login";
import { routeGenerator } from "../utils/routeGenerator";
import { adminPaths } from "./admin.routes";
import { donorPaths } from "./donorRoutes";
import Home from "../pages/Home/Home";
import Testimonials from "../pages/testimonials/Testimonials";
import LeaderBoard from "../pages/LeaderBoard";
import AdminRoute from "./AdminRoute";
import DonorRoute from "./DonorRoute";
import About from "../pages/aboutUs/About";
import Campains from "../pages/supplies/Campains";
import CampainDetails from "../pages/supplies/CampainDetails";
import News from "../pages/News";

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
        path: "/campains",
        element: <Campains></Campains>,
      },
      {
        path: "/campains/:id",
        element: <CampainDetails></CampainDetails>,
      },
      {
        path: "/team",
        element: <Testimonials></Testimonials>,
      },
      {
        path: "/leaderboard",
        element: <LeaderBoard></LeaderBoard>,
      },
      {
        path: "/news",
        element: <News></News>,
      },
      {
        path: "/about-us",
        element: <About></About>,
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
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
]);

export default router;
