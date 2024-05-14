import { useAllTestimonialsQuery } from "../../redux/features/testimonials/testimonialsManagementApi";
import { TTestimonial } from "../../types/Tetimonial.type";

const DonorTestimonials = () => {
  const { data } = useAllTestimonialsQuery("");
  return (
    <div>
      {data?.map((testi: TTestimonial) => (
        <p key={testi.message}>{testi.title}</p>
      ))}
    </div>
  );
};

export default DonorTestimonials;
