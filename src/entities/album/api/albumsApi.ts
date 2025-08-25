import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Album, Photo } from "../model/types";

export const albumsApi = createApi({
  reducerPath: "albumsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com" }),
  tagTypes: ["Albums"], 
  endpoints: (builder) => ({
    getAlbums: builder.query<Album[], void>({
      query: () => "/albums",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Albums" as const, id })),
              { type: "Albums" as const, id: "LIST" },
            ]
          : [{ type: "Albums" as const, id: "LIST" }],
    }),
    getAlbumPhotos: builder.query<Photo[], number>({
      query: (albumId) => `/albums/${albumId}/photos`,
      providesTags: (_result, _error, albumId) => [
        { type: "Albums", id: albumId },
      ],
    }),
  }),
});

export const { useGetAlbumsQuery, useGetAlbumPhotosQuery } = albumsApi;
