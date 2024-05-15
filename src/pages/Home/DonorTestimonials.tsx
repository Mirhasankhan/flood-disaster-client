import { useAllTestimonialsQuery } from "../../redux/features/testimonials/testimonialsManagementApi";
import { TTestimonial } from "../../types/Tetimonial.type";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const DonorTestimonials = () => {
  const { data } = useAllTestimonialsQuery("");
  return (
    <div>
      <h1 className="text-center font-semibold text-3xl py-5">
        Our Donor Testimonials
      </h1>
      <div className="grid md:grid-cols-5 grid-cols-2 gap-4 mx-6 md:mx-12 my-8 ">
        {data?.slice(0, 5).map((testi: TTestimonial) => (
          <div
            className="border p-2 md:p-4 flex flex-col rounded-md"
            key={testi.message}
          >
            <img
              className="rounded-full md:h-36 md:w-36 h-24 w-24 mx-auto"
              src={testi.image}
              alt=""
            />
            <p className="py-2 font-semibold">{testi.title}</p>
            <p className="pb-3">
              {testi.message.length > 80 ? (
                <>{testi.message.slice(0, 80)}...</>
              ) : (
                testi.message
              )}
            </p>
            <Rating
              className="mt-auto"
              style={{ maxWidth: 100 }}
              value={Math.round(testi.rating)}
              readOnly
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonorTestimonials;
