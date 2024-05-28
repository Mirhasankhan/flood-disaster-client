import { baseApi } from "../../api/baseApi";

const communityApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addComment: builder.mutation({
      query: (comment) => ({
        url: "/addComment",
        method: "POST",
        body: comment,
      }),
    }),
    allComments: builder.query({
      query: () => ({
        url: `/allComments`,
        method: "GET",
      }),
    }),
  }),
});

export const { useAddCommentMutation, useAllCommentsQuery } = communityApi;
