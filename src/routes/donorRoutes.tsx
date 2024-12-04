import CreateTestimonial from "../pages/donor/CreateTestimonial";
import DonorDashboard from "../pages/donor/DonorDashboard";

export const donorPaths = [
  {
    name: "Insight",
    path: "insight",
    element: <DonorDashboard></DonorDashboard>,
  },

  {
    name: "My Donations",
    path: "my-donations",
    element: "my donaton",
  },
  {
    name: "Create Testimonial",
    path: "create-testimonial",
    element: <CreateTestimonial></CreateTestimonial>,
  },
];
