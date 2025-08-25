import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../../../app/providers/store/store";
import type { Post } from "../types";

const postsAdapter = createEntityAdapter<Post>(); 

const postSlice = createSlice({
  name: "posts",
  initialState: postsAdapter.getInitialState(),
  reducers: {
    setPosts: (state, action: { payload: Post[] }) => {
      postsAdapter.setAll(state, action.payload);
    },
    upsertPost: (state, action: { payload: Post }) => {
      postsAdapter.upsertOne(state, action.payload);
    },
  },
});

export const { setPosts, upsertPost } = postSlice.actions;
export const postSelectors = postsAdapter.getSelectors<RootState>((state) => state.posts);
export default postSlice.reducer;
