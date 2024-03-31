import { baseApi } from "../../api/baseApi";

const supplyApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addSupply: builder.mutation({
      query: (supplyInfo) => ({
        url: "/addSupply",
        method: "POST",
        body: supplyInfo,
      }),
      invalidatesTags: ["supply"],
    }),
    supplies: builder.query({
      query: (email) => ({
        url: `/supplies?email=${email}`,
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
    updateSupplyStatus: builder.mutation({
      query: ({ id, isApplied }) => ({
        url: `/supplies/${id}`,
        method: "PUT",
        body: { isApplied },
      }),
      invalidatesTags: ["supply"],
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
  useAddSupplyMutation,
  useSuppliesQuery,
  useDeleteMutation,
  useSingleSupplyQuery,
  useUpdateSupplyStatusMutation,
} = supplyApi;
