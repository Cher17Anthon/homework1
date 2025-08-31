import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../../../app/providers/store/store";
import type { User } from "../types";

const usersAdapter = createEntityAdapter<User>(); 

const userSlice = createSlice({
  name: "users",
  initialState: usersAdapter.getInitialState(),
  reducers: {
    setUsers: (state, action: { payload: User[] }) => {
      usersAdapter.setAll(state, action.payload);
    },
    upsertUser: (state, action: { payload: User }) => {
      usersAdapter.upsertOne(state, action.payload);
    },
  },
});

export const { setUsers, upsertUser } = userSlice.actions;
export const userSelectors = usersAdapter.getSelectors<RootState>((state) => state.users);
export default userSlice.reducer;
