import { baseApi } from "../../api/baseApi";

const recipientApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addApply: builder.mutation({
      query: (applyInfo) => ({
        url: "/addApply",
        method: "POST",
        body: applyInfo,
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
  useAddApplyMutation,
  useAppliesQuery,
  useDeleteMutation,
  useSingleSupplyQuery,
} = recipientApi;
