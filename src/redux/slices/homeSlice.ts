import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "@/lib/axiosInstance";

export const getWellerStats = createAsyncThunk(
  "home/getWellerStats",
  async (_, thunkAPI) => {
    try {
      const res = await axiosInstance.get(`admin/weller-stats`);
      console.log("Count stats data: ", res.data);

      return res.data;
    } catch (err: any) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || "Failed to fetch count"
      );
    }
  }
);

export const getPrayersGroup = createAsyncThunk(
  "home/getPrayersGroup",
  async ({ day, time }: { day: any; time: any }, thunkAPI) => {
    try {
      const res = await axiosInstance.get(
        `admin/prayer-groups?day=${day}&time=${time}`
      );
      console.log("Prayers Group Response: ", res);
      return res.data;
    } catch (err: any) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return thunkAPI.rejectWithValue(
        err?.response?.data?.error ||
          err.response?.data?.message ||
          "Failed to fetch count"
      );
    }
  }
);

export const getWellerStatus = createAsyncThunk(
  "home/getWellerStatus",
  async (_, thunkAPI) => {
    try {
      const res = await axiosInstance.get(`admin/wellers-status`);
      console.log("Weller status data: ", res.data);

      return res.data;
    } catch (err: any) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || "Failed to fetch count"
      );
    }
  }
);

export const globalSearch = createAsyncThunk(
  "home/globalSearch",
  async ({ query }: { query: any }, thunkAPI) => {
    try {
      const res = await axiosInstance.get(
        `web/products/search-product?query=${query}`
      );
      console.log("Main Search Data: ", res?.data);
      return res.data;
    } catch (err: any) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || "Failed to fetch search data"
      );
    }
  }
);

export const getBrands = createAsyncThunk(
  "home/getBrands",
  async (_, thunkAPI) => {
    try {
      const res = await axiosInstance.get(`web/brands/brands`);
      console.log("brands data: ", res.data);

      return res.data;
    } catch (err: any) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || "Failed to fetch brands by id"
      );
    }
  }
);

export const fetchPopularProducts = createAsyncThunk(
  "home/fetchPopularProducts",
  async (_, thunkAPI) => {
    try {
      const res = await axiosInstance.get(`web/products/popular-products`);
      console.log("Popular products: ", res.data);

      return res.data;
    } catch (err: any) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || "Failed to fetch popular products"
      );
    }
  }
);

// 2. Initial State
const initialState = {
  statistics: null,
  groups: [],
  wellerStatus: [],
  searchData: [],
  getBrand: [],
  popularProducts: [],
  loading: false,
  error: null as string | null,
};

// 3. Slice
const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      // Statistics

      .addCase(getWellerStats.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getWellerStats.fulfilled, (state, action) => {
        state.statistics = action.payload;
      })
      .addCase(getWellerStats.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(getPrayersGroup.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPrayersGroup.fulfilled, (state, action) => {
        state.loading = false;
        state.groups = action.payload;
      })
      .addCase(getPrayersGroup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(getWellerStatus.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getWellerStatus.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(getWellerStatus.fulfilled, (state, action) => {
        state.loading = false;
        state.wellerStatus = action.payload;
      })
      // GLOBAL SEARCH
      .addCase(globalSearch.pending, (state) => {
        state.loading = true;
      })
      .addCase(globalSearch.fulfilled, (state, action) => {
        state.loading = false;
        state.searchData = action.payload;
      })
      .addCase(globalSearch.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch search data";
      })
      .addCase(getBrands.pending, (state) => {
        state.loading = true;
      })
      .addCase(getBrands.fulfilled, (state, action) => {
        state.loading = false;
        state.getBrand = action.payload;
      })
      .addCase(getBrands.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch getBrand data";
      })
      .addCase(fetchPopularProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPopularProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.popularProducts = action.payload;
      })
      .addCase(fetchPopularProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch getBrand data";
      });
  },
});

export default homeSlice.reducer;
