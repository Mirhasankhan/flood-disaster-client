import { baseApi } from "../../api/baseApi";

const supplyApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addSupply: builder.mutation({
      query: (supplyInfo) => ({
        url: "/addCampain",
        method: "POST",
        body: supplyInfo,
      }),
      invalidatesTags: ["supply"],
    }),
    supplies: builder.query({
      query: (email) => ({
        url: `/campains?email=${email}`,
        method: "GET",
      }),
      providesTags: ["supply"],
    }),
    singleCampain: builder.query({
      query: (id) => ({
        url: `/campains/${id}`,
        method: "GET",
      }),
      providesTags: ["supply"],
    }),
    updateCollection: builder.mutation({
      query: ({ id, newAmount }) => ({
        url: `/campains/${id}`,
        method: "PUT",
        body: { newAmount },
      }),
      invalidatesTags: ["supply"],
    }),
    delete: builder.mutation({
      query: (id) => ({
        url: `/campains/${id}`,
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
  useSingleCampainQuery,
  useUpdateCollectionMutation,
} = supplyApi;
