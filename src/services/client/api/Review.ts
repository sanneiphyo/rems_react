import { createApi } from "@reduxjs/toolkit/query/react";
import baseUrl from "../../../app/hook";

export interface Review {
  userId: number;
  propertyId: number;
  rating: number;
  comments: string;
}

export const clientReviewApi = createApi({
  reducerPath: "review",
  baseQuery: baseUrl,
  endpoints: (builder) => ({
    postReview: builder.mutation<Review, Review>({
      query: (review) => ({
        url: "reviews",
        method: "POST",
        body: review,
      }),
    }),
  }),
});

export const { usePostReviewMutation } = clientReviewApi;

export default clientReviewApi;
