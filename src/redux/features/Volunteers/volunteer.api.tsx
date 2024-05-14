import { baseApi } from "../../api/baseApi";

const volunteerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addVolunteer: builder.mutation({
      query: (volunteer) => ({
        url: "/volunteer",
        method: "POST",
        body: volunteer,
      }),
    }),
    allVolunteers: builder.query({
      query: () => ({
        url: `/volunteers`,
        method: "GET",
      }),
    }),
  }),
});

export const { useAddVolunteerMutation, useAllVolunteersQuery } = volunteerApi;
