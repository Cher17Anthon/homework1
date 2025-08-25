import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Comment } from "../model/types";

export const commentsApi = createApi({
  reducerPath: "commentsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com" }),
  tagTypes: ["Comments"],
  endpoints: (builder) => ({
    getCommentsByPost: builder.query<Comment[], number>({
      query: (postId) => `/posts/${postId}/comments`,
      providesTags: (_result, _error, postId) => {
        void _error;
        return [{ type: "Comments" as const, id: postId }];
      },
    }),
  }),
});

export const { useGetCommentsByPostQuery } = commentsApi;
