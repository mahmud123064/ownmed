

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    user: null,
    token: null,
    isLoading: false,
    error: null,
};

// simulate API call for user signup
export const registerUser = createAsyncThunk(
    "auth/signup",
    async (payload, { rejectWithValue }) => {
        try {
            const res = await axios.post(
                "http://localhost:3000/api/auth/signup",
                payload,
            );
            return res.data;
        } catch (err) {
            return rejectWithValue(
                err.response?.data?.message || "Signup failed",
            );
        }
    },
);

// simulate API call for user login
export const loginUser = createAsyncThunk(
    "auth/login",
    async (payload, { rejectWithValue }) => {
        try {
            const res = await axios.post(
                "http://localhost:3000/api/auth/login",
                payload,
            );
            return res.data; // { token, user }
        } catch (err) {
            return rejectWithValue(
                err.response?.data?.message || "Login failed",
            );
        }
    },
);

// google login
export const googleLoginUser = createAsyncThunk(
    "auth/googleLogin",
    async (token, { rejectWithValue }) => {
        try {
            const res = await axios.post(
                "http://localhost:3000/api/auth/google",
                { token },
            );

            return res.data;
        } catch (err) {
            return rejectWithValue(
                err.response?.data?.message || "Google login failed",
            );
        }
    },
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
            // signup
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
            })

            // login
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload.user;
                state.token = action.payload.token;

                localStorage.setItem("token", action.payload.token);
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })

            // google
            .addCase(googleLoginUser.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(googleLoginUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload.user;
                state.token = action.payload.token;

                localStorage.setItem("token", action.payload.token);
            })
            .addCase(googleLoginUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { logout } = authSlice.actions;
// THIS is what my store is importing
export default authSlice.reducer;
