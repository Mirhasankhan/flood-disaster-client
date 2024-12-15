import { baseApi } from "../../api/baseApi";

const usersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    users: builder.query({
      query: (role) => ({
        url: `/users?role=${role}`,
        method: "GET",
      }),
    }),
    leaderboard: builder.query({
      query: () => ({
        url: `/leaderboard`,
        method: "GET",
      }),
      providesTags: ["supply"],
    }),
    donations: builder.query({
      query: (email) => ({
        url: `/donations?email=${email}`,
        method: "GET",
      }),
      providesTags: ["supply"],
    }),
    approveApply: builder.mutation({
      query: ({ id1, id2, isApproved }) => ({
        url: `/approve/${id1}/${id2}`,
        method: "PUT",
        body: { isApproved },
      }),
      invalidatesTags: ["supply"],
    }),
  }),
});

export const {
  useLeaderboardQuery,
  useUsersQuery,
  useDonationsQuery,
  useApproveApplyMutation,
} = usersApi;
