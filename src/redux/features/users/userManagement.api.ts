import { baseApi } from "../../api/baseApi";

const usersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    users: builder.query({
      query: (role) => ({
        url: `/users?role=${role}`,
        method: "GET",
      }),
    }),
    deny: builder.mutation({
      query: (id) => ({
        url: `/deny/${id}`,
        method: "DELETE",
      }),
    }),
    approveApply: builder.mutation({
      query: ({ id, isApproved }) => ({
        url: `/approve/${id}`,
        method: "PUT",
        body: { isApproved },
      }),
      invalidatesTags: ["supply"],
    }),
  }),
});

export const { useUsersQuery, useDenyMutation, useApproveApplyMutation } =
  usersApi;
