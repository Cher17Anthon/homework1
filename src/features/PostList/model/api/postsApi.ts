import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type Comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export type Album = {
  userId: number;
  id: number;
  title: string;
};

export type Photo = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com" }),
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], void>({
      query: () => "/posts",
    }),
    getPostById: builder.query<Post, number>({
      query: (id) => `/posts/${id}`,
    }),
    getCommentsByPost: builder.query<Comment[], number>({
      query: (postId) => `/posts/${postId}/comments`,
    }),
    getAlbums: builder.query<Album[], void>({
      query: () => "/albums",
    }),
    getAlbumPhotos: builder.query<Photo[], number>({
      query: (albumId) => `/albums/${albumId}/photos`,
    }),
    getTodosByUser: builder.query<Todo[], number>({
      query: (userId) => `/users/${userId}/todos`,
    }),
    getUsers: builder.query<User[], void>({
      query: () => "/users",
    }),
    getUserPosts: builder.query<Post[], number>({
      query: (userId) => `/users/${userId}/posts`,
    }),
    getUserAlbums: builder.query<Album[], number>({
      query: (userId) => `/users/${userId}/albums`,
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetPostByIdQuery,
  useGetCommentsByPostQuery,
  useGetAlbumsQuery,
  useGetAlbumPhotosQuery,
  useGetTodosByUserQuery,
  useGetUsersQuery,
  useGetUserPostsQuery,
  useGetUserAlbumsQuery,
} = postsApi;

