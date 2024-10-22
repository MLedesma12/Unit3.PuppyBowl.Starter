import puppyBowlApi from "../../api/puppyBowlApi";

/*
TODO: Define the following 4 endpoints:
  1. getPuppies (query)
  2. getPuppy (query)
  3. addPuppy (mutation)
  4. deletePuppy (mutation)

The query endpoints should provide the "Puppy" tag.
The mutation endpoints should invalidate the "Puppy" tag.

(Optional) TODO: Write `transformResponse` and `transformErrorResponse`
functions for each endpoint.
*/

const puppyApi = puppyBowlApi.injectEndpoints({
  endpoints: (build) => ({
    getPuppies: build.query({
      query: () => "/players",
      providesTags: ["Puppy"],
    }),
    getPuppy: build.query({
      query: (id) => `player/${id}`,
      providesTags: ["Puppy"],
    }),
    addPuppy: build.mutation({
      query: (body) => ({
        url: "/players",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Puppy"],
    }),
    deletePuppy: build.mutation({
      query: (body) => ({
        url: `players/${body.id}`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Puppy"],
    }),
  }),
});

export const {
  useGetPuppiesQuery,
  useGetPuppyQuery,
  useAddPuppyMutation,
  useDeletePuppyMutation,
} = puppyApi;
