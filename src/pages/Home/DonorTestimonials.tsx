import { useAllTestimonialsQuery } from "../../redux/features/testimonials/testimonialsManagementApi";
import { TTestimonial } from "../../types/Tetimonial.type";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const DonorTestimonials = () => {
  const { data } = useAllTestimonialsQuery("");
  return (
    <div>
      <h1 className="text-center font-semibold text-3xl pb-5">
        What Our <span className="text-blue-600">Donor's Says</span>
      </h1>
      <p className="text-center ">
        The way a team plays as a whole determines its success. You may have the
        greatest bunch of individual stars <br /> in the world, but if they
        don’t play together, the club won’t be worth a dime
      </p>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-4 mx-6 md:mx-12 my-8 ">
        {data?.slice(0, 5).map((testi: TTestimonial) => (
          <div
            className="border p-2 md:p-6 flex flex-col items-center text-center rounded-md"
            key={testi.message}
          >
            <img
              className="rounded-full md:h-24 md:w-24 h-20 w-20 mx-auto"
              src={testi.image}
              alt=""
            />
            <p className="py-2 text-xl font-semibold">{testi.title}</p>
            <p className="pb-3 ">
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
