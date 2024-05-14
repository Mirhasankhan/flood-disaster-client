import { useAllTestimonialsQuery } from "../../redux/features/testimonials/testimonialsManagementApi";
import { TTestimonial } from "../../types/Tetimonial.type";

const DonorTestimonials = () => {
  const { data } = useAllTestimonialsQuery("");
  return (
    <div>
      <h1 className="text-center font-semibold text-3xl py-5">
        Our Donor Testimonials
      </h1>
      <div className="grid grid-cols-5 gap-4 mx-6 md:mx-12 my-8 ">
        {data?.map((testi: TTestimonial) => (
          <div className="border p-4" key={testi.message}>
            <img
              className="rounded-full h-36 w-36 mx-auto"
              src={testi.image}
              alt=""
            />
            <p className="py-2 font-semibold">{testi.title}</p>
            <p>
              {testi.message.length > 80 ? (
                <>{testi.message.slice(0, 80)}...</>
              ) : (
                testi.message
              )}
            </p>
            <p>Rating: {testi.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonorTestimonials;
