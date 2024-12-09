import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// https://l2-b2-frontend-path-assignment-6-server-starter-pack-one.vercel.app

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://l2-b2-frontend-path-assignment-6-server-starter-pack-one.vercel.app/api/v1",
  }),
  tagTypes: ["supply"],
  endpoints: () => ({}),
});
