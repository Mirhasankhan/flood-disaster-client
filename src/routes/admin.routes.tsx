import AdminDashboard from "../pages/admin/AdminDashboard";
import DonationDetails from "../pages/admin/DonationDetails";
import ManageRecipient from "../pages/admin/ManageRecipient";

export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard></AdminDashboard>,
  },
  // {
  //   name: "User Management",
  //   children: [
  //     {
  //       name: "Donor Details",
  //       path: "donor-details",
  //       element: "manage donor",
  //     },
  //     {
  //       name: "Service Details",
  //       path: "service-details",
  //       element: "manage service",
  //     },
  //   ],
  // },
  {
    name: "Service Management",
    children: [
      {
        name: "Donation Details",
        path: "donation-details",
        element: <DonationDetails></DonationDetails>,
      },
      // {
      //   name: "Manage Donor",
      //   path: "manage-donor",
      //   element: <DonorDetails></DonorDetails>,
      // },
      {
        name: "Manage Recipient",
        path: "manage-recipient",
        element: <ManageRecipient></ManageRecipient>,
      },
    ],
  },
];
