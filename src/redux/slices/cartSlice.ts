// src/redux/slices/cartSlice.ts
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "@/lib/axiosInstance";
export interface CartItem {
  productId: string | number;
  quantity: number;
  // baki jo bhi props product ke andar aate hain unhe dynamically allow karenge
  [key: string]: any;
}

interface CartState {
  items: CartItem[];
  loading: boolean;
  error: any;
}

export const addCart = createAsyncThunk(
  "cart/addCart",
  async ({ data }: { data: CartItem }, thunkAPI) => {
    try {
      const res = await axiosInstance.post(`web/cart/add-cart`, data);
      console.log("Add cart response: ", res?.data);
      return res.data;
    } catch (err: any) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || "Failed to add cart"
      );
    }
  }
);



export const fetchCartList = createAsyncThunk(
  "cart/addCart",
  async (_,thunkAPI) => {
    try {
      const res = await axiosInstance.get(`web/cart/list`);
      console.log("cart list response: ", res?.data);
      return res.data;
    } catch (err: any) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || "Failed to add cart"
      );
    }
  }
);


const initialState: CartState = {
  items: [],
  loading: false,
  error: null as string | any,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<any>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...action.payload, // pura product object
          quantity: 1, // 👈 sirf quantity inject
        });
      }
    },

    removeFromCart: (state, action: PayloadAction<string | number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    increaseQty: (state, action: PayloadAction<string | number>) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },

    decreaseQty: (state, action: PayloadAction<string | number>) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },

    clearCart: (state) => {
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(addCart.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(addCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed add cart";
      });
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQty,
  decreaseQty,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
