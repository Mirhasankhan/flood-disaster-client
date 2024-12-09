import { baseApi } from "../../api/baseApi";

const newsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addNews: builder.mutation({
      query: (news) => ({
        url: "/addNews",
        method: "POST",
        body: news,
      }),
    }),
    allNews: builder.query({
      query: () => ({
        url: `/allNews`,
        method: "GET",
      }),
    }),
  }),
});

export const { useAddNewsMutation, useAllNewsQuery } = newsApi;
