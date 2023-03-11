import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, { payload }) => {
      state.users.push(payload);
    },
    deleteUser: (state, { payload }) => {
      state.users = state.users.filter((user) => user.id != payload);
    },
    updateUser: (state, { payload }) => {
      state.users = state.users.map((user) => {
        if (user.id == payload.id) {
          user.name = payload.value;
        }
        return user;
      });
    },
  },
});

export const { addUser, deleteUser, updateUser } = userSlice.actions;

export default userSlice.reducer;
