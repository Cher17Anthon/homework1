import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { User } from "../model/types";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com" }),
  tagTypes: ["Users"],
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      query: () => "/users",
      providesTags: (result) =>
        result
          ? [
              ...result.map((u) => ({ type: "Users" as const, id: u.id })),
              { type: "Users" as const, id: "LIST" },
            ]
          : [{ type: "Users" as const, id: "LIST" }],
    }),
    getUserById: builder.query<User, number>({
      query: (id) => `/users/${id}`,
      providesTags: (_result, _error, id) => {
        void _error;
        return [{ type: "Users" as const, id }];
      },
    }),
  }),
});

export const { useGetUsersQuery, useGetUserByIdQuery } = usersApi;
