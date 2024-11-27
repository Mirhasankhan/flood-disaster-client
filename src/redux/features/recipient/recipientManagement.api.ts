import { baseApi } from "../../api/baseApi";

const recipientApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addDonation: builder.mutation({
      query: (info) => ({
        url: "/donate",
        method: "POST",
        body: info,
      }),
      invalidatesTags: ["supply"],
    }),

    applies: builder.query({
      query: (email) => ({
        url: `/applies?email=${email}`,
        method: "GET",
      }),
      providesTags: ["supply"],
    }),
    singleSupply: builder.query({
      query: (id) => ({
        url: `/supplies/${id}`,
        method: "GET",
      }),
    }),
    delete: builder.mutation({
      query: (id) => ({
        url: `/supplies/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["supply"],
    }),
  }),
});

export const {
  useAddDonationMutation,
  useAppliesQuery,
  useDeleteMutation,
  useSingleSupplyQuery,
} = recipientApi;
