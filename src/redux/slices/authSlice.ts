import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "@/lib/axiosInstance";

export interface RegisterPayload {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
  password_confirmation: string;
  companyName: string;
  addressLine1: string;
  addressLine2?: string;
  suburb: string;
  country: string;
  state: string;
  zip: string;
}

interface AuthState {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  user: any;
  token: string | null;
  loading: boolean;
  error: string | null;
  isAuthenticated: boolean;
  stores: { storeId: number; name?: string }[];
}

const initialState: AuthState = {
  user: null,
  token: null,
  loading: false,
  error: null,
  isAuthenticated: false,
  stores: [],
};

// Login thunk
export const loginUser = createAsyncThunk(
  "auth/login",
  async (data: any, thunkAPI) => {
    console.groupCollapsed("🟢 [Thunk] loginUser()");
    try {
      console.log("➡️ Base URL:", axiosInstance.defaults.baseURL);
      console.log("➡️ Endpoint:", "user/login");
      console.log("📤 Payload being sent:", data);

      const res = await axiosInstance.post("user/login", data);

      console.log("✅ Response Status:", res.status);
      console.log("✅ Response Data:", res.data);
      console.groupEnd();
      return res.data;
    } catch (err: any) {
      console.error("❌ Thunk Error caught:", err);
      if (err.response) {
        console.error("❌ Response Status:", err.response.status);
        console.error("❌ Response Data:", err.response.data);
      } else {
        console.error("❌ No response (network or CORS):", err.message);
      }
      console.groupEnd();
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || "Login failed"
      );
    }
  }
);

// Register thunk
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (formData: RegisterPayload, thunkAPI) => {
    try {
      const res = await axiosInstance.post("user/register", formData);
      return res.data;
    } catch (err: any) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || "Registration failed"
      );
    }
  }
);

// Update Password thunk
export const updatePassword = createAsyncThunk(
  "auth/updatePassword",
  async ({ data }: { data: any }, thunkAPI) => {
    try {
      const res = await axiosInstance.post("auth/change-password", data);
      return res.data;
    } catch (err: any) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || "Password Updation failed"
      );
    }
  }
);

// Slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      // localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      // Pending
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      // Fulfilled - login
      .addCase(loginUser.fulfilled, (state, action) => {
        const { user, token } = action.payload.data || action.payload;
        state.loading = false;
        state.user = user;
        state.token = token;
        state.isAuthenticated = true;
        // state.stores = action.payload.stores.map((store: any) => ({
        //   storeId: store.id,
        //   name: store.name,
        // }));

        // localStorage.setItem("token", action.payload.token);
        // if (action.payload.stores?.length === 1) {
        //   localStorage.setItem("storeId", action.payload.stores[0].id.toString());
        // }
      })

      // Fulfilled - register
      .addCase(registerUser.fulfilled, (state) => {
        state.loading = false;
      })

      // Rejected
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
