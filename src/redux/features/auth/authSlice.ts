import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

type TAuthState = {
  email: null | object;
  role: null | string;
  token: null | string;
  name: null | string;
};

const initialState: TAuthState = {
  email: null,
  role: null,
  token: null,
  name: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      const { email, token, role, name } = action.payload;
      state.email = email;
      state.role = role;
      state.token = token;
      state.name = name;
    },
    logOut: (state) => {
      (state.email = null), (state.token = null), (state.role = null);
    },
  },
});

export const { setUser, logOut } = authSlice.actions;
export default authSlice.reducer;

export const useCurrentUser = (state: RootState) => state.auth;
export const useCurrentToken = (state: RootState) => state.auth.token;
export const useCurrentRole = (state: RootState) => state.auth.role;
