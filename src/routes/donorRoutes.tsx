import CreateTestimonial from "../pages/donor/CreateTestimonial";
import DonorDashboard from "../pages/donor/DonorDashboard";
import MyDonations from "../pages/donor/MyDonations";

export const donorPaths = [
  {
    name: "Insight",
    path: "insight",
    element: <DonorDashboard></DonorDashboard>,
  },

  {
    name: "My Donations",
    path: "my-donations",
    element: <MyDonations></MyDonations>,
  },
  {
    name: "Create Testimonial",
    path: "create-testimonial",
    element: <CreateTestimonial></CreateTestimonial>,
  },
];
