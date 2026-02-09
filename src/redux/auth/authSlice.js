// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// // const initialState = {
// //   user: null,
// //   token: null,
// //   isLoading: false,
// //   error: null,
// // };

// export  const registerUser = createAsyncThunk(
//   "auth/signup",
//   async (payload, { rejectWithValue }) => {
//     try {
//       const res = await axios.post(
//         "http://localhost:3000/api/auth/signup",
//         payload
//       );
//       return res.data;
//     } catch (err) {
//       return rejectWithValue(
//         err.response?.data?.message || "Signup failed"
//       );
//     }
//   }
// );


import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: null,
  token: null,
  isLoading: false,
  error: null,
};

export const registerUser = createAsyncThunk(
  "auth/signup",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        "http://localhost:3000/api/auth/signup",
        payload
      );
      return res.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || "Signup failed"
      );
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user || null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;

// ✅ THIS is what your store is importing
export default authSlice.reducer;
