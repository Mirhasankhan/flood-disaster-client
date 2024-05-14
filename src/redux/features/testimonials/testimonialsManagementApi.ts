import { baseApi } from "../../api/baseApi";

const testimonialsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addTestimonial: builder.mutation({
      query: (testimonial) => ({
        url: "/createTestimonial",
        method: "POST",
        body: testimonial,
      }),
    }),
    allTestimonials: builder.query({
      query: () => ({
        url: `/testimonials`,
        method: "GET",
      }),
    }),
  }),
});

export const { useAddTestimonialMutation, useAllTestimonialsQuery } =
  testimonialsApi;
