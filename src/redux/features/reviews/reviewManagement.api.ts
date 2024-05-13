import { baseApi } from "../../api/baseApi";

const reviewsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addReview: builder.mutation({
      query: (reviewInfo) => ({
        url: `/addReview`,
        method: "POST",
        body: reviewInfo,
      }),
    }),
  }),
});

export const { useAddReviewMutation } = reviewsApi;
